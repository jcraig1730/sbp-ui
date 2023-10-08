"use client";
import { authenticateMaster, createAlbum, getUsers, uploadPhotos } from "@/api";
import { Album, User } from "@/api/dtoTypes";
import ImageModalServerComponent from "@/components/modals/ImageModalServerComponent";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { addToast } from "@/redux/slices/toast";
import { getUiUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const ImageUploader = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [customer, setCustomer] = useState<string>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [customerList, setCustomerList] = useState<User[]>([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>();
  const [saving, setSaving] = useState(false);
  const [showNewAlbumForm, setShowNewAlbumForm] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await authenticateMaster();
        const result = await getUsers();
        setCustomerList(result.data);
        setLoading(false);
      } catch (e) {
        router.push("/");
        dispatch(addToast({ id: v4(), message: "Not Allowed", type: "error" }));
      }
    })();
  }, [dispatch, router]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    if (newFiles) {
      const imagesArray = Array.from(newFiles);
      const updatedFiles = [...files, ...imagesArray];
      setFiles(updatedFiles);

      const previewsArray = updatedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviewUrls(previewsArray);
    }
  };

  const removeImage = (index: number) => {
    const updatedFiles = files.slice(0, index).concat(files.slice(index + 1));
    const updatedUrls = imagePreviewUrls
      .slice(0, index)
      .concat(imagePreviewUrls.slice(index + 1));

    setFiles(updatedFiles);
    setImagePreviewUrls(updatedUrls);
  };

  const handleSubmit = async () => {
    if (!selectedAlbumId) {
      dispatch(
        addToast({
          message: "Select or create an album",
          type: "error",
          id: v4(),
        })
      );
      return;
    }
    const formData = new FormData();
    files.forEach((f) => formData.append("files", f));
    const response = await uploadPhotos(selectedAlbumId!, formData);
    dispatch(addToast({ message: "Photos added", type: "success", id: v4() }));
  };

  if (loading)
    return (
      <div className="loading-ring h-screen w-screen flex justify-center items-center" />
    );

  return (
    <StandardPageWrapper title="Image Upload Portal">
      <div className="flex">
        <form className={"flex flex-col"}>
          <label htmlFor="customer-select">Select Customer</label>
          <select
            onChange={async (e) => {
              const selected = customerList.find(
                (c) => c.id === e.target.value
              );
              if (!selected) return;
              setCustomer(e.target.value);
              setAlbums(selected.albums);
            }}
            value={customer}
            name="customer-select"
            id="customer-select"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select Customers Email
            </option>
            {customerList.map((customer) => (
              <option value={customer.id} key={customer.id}>
                {customer.email}
              </option>
            ))}
          </select>

          <div className={"py-3 form-control"}>
            <label htmlFor="album-select">Select Album</label>
            <select
              name="album-select"
              id="album-select"
              value={selectedAlbumId}
              onChange={(e) => setSelectedAlbumId(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Album
              </option>
              {albums.map((album) => (
                <option value={album.id} key={album.id}>
                  {album.name}
                </option>
              ))}
            </select>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNewAlbumForm(true);
              }}
              className="btn btn-ghost max-w-[200px] mt-2 mb-4"
            >
              Add Album+
            </button>
          </div>

          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="file-input file-input-lg file-input-accent"
          />
        </form>
        <div className="flex flex-wrap w-full overflow-scroll">
          {imagePreviewUrls.map((url, idx) => (
            <div key={url} className="relative w-1/5 h-2/5 group">
              <div
                onClick={() => removeImage(idx)}
                className="flex items-center justify-center opacity-0 right-0 group-hover:opacity-90 hover:cursor-pointer transition-opacity absolute z-10  rounded-full h-8 w-8 text-center  bg-error"
              >
                🗑️
              </div>
              <Image
                src={url}
                fill
                className="object-cover"
                alt="Image preview"
              />
              <Link href={"?image-url=" + url} passHref>
                <div className="text-center absolute w-full bottom-0 h-1/4 top-100 bg-slate-300 transition-opacity opacity-0 group-hover:opacity-70">
                  View Full Size
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div
          className={`${
            showNewAlbumForm ? "block" : "hidden"
          } absolute flex justify-center items-center top-0 left-0 w-[100vw] h-[100vh] bg-secondary   bg-opacity-80`}
        >
          <div
            className={`w-3/4 max-w-lg h-fit bg-primary border border-accent rounded-md flex justify-center items-center`}
          >
            <form className="form-control w-fit py-12 gap-8">
              <label className={"text-2xl"}>Album Name</label>
              <input
                type="text"
                placeholder="Album Name"
                value={newAlbumName}
                onChange={(e) => setNewAlbumName(e.target.value)}
                className="input text-lg input-bordered input-accent w-full max-w-xs"
              />
              <div className="gap-6 flex flex-col md:flex-row justify-evenly  my-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setNewAlbumName("");
                    setShowNewAlbumForm(false);
                  }}
                  className="btn btn-secondary w-full"
                >
                  Cancel
                </button>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    if (customer && newAlbumName.length > 0) {
                      const result = await createAlbum(customer, newAlbumName);
                      setAlbums((list) => [...list, result]);
                      // verifyToken();
                      setNewAlbumName("");
                      setShowNewAlbumForm(false);
                    }
                  }}
                  className="btn btn-accent w-full"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full btn btn-accent mt-8"
      >
        {saving ? (
          <div className="loading loading-ring"></div>
        ) : (
          "Upload Images"
        )}
      </button>
      <ImageModalServerComponent
        returnUrl={getUiUrl() + "image-upload-portal"}
        alt="Preview photo"
      />
    </StandardPageWrapper>
  );
};

export default ImageUploader;
