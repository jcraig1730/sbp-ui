"use client";
import {
  authenticateMaster,
  createAlbum,
  uploadPhoto,
  verifyToken,
} from "@/api";
import { Album, User } from "@/api/dtoTypes";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { addToast } from "@/redux/slices/toast";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [customer, setCustomer] = useState<string>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [customerList, setCustomerList] = useState<User[]>([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>();

  const [showNewAlbumForm, setShowNewAlbumForm] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await authenticateMaster();
        const result = await axios.get(
          "http://localhost:3000/users/test-route",
          { withCredentials: true, headers: { Authorization: document.cookie } }
        );
        setCustomerList(result.data);
        setLoading(false);
      } catch (e) {
        router.push("/");
        dispatch(addToast({ id: v4(), message: "Not Allowed", type: "error" }));
      }
    })();
  }, []);

  const handleImageChange = (e: any) => {
    e.preventDefault();

    let reader = new FileReader();
    let selectedFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(selectedFile);
      const result = reader.result as string;
      setImagePreviewUrl(result);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file!);
    formData.append("name", "test name");
    if (selectedAlbumId) {
      uploadPhoto(selectedAlbumId, formData);
    }
  };

  if (loading)
    return (
      <div className="loading-ring h-screen w-screen flex justify-center items-center" />
    );

  return (
    <StandardPageWrapper title="Image Upload Portal">
      <div className="flex">
        <form onSubmit={handleSubmit} className={"flex flex-col"}>
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
                <option value={album.id}>{album.name}</option>
              ))}
            </select>
            <button
              onClick={() => setShowNewAlbumForm(true)}
              className="btn btn-primary max-w-xs mt-1 mb-3"
            >
              Create Album
            </button>
          </div>

          <input type="file" onChange={handleImageChange} />
          <button type="submit" onClick={handleSubmit}>
            Upload Image
          </button>
        </form>
        {imagePreviewUrl && (
          <div className="relative w-1/2 h-[500px] mx-auto">
            <Image
              fill
              className="object-contain"
              src={imagePreviewUrl}
              alt="Image Preview"
            />
          </div>
        )}
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
    </StandardPageWrapper>
  );
};

export default ImageUploader;
