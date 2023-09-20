"use client";

import { RootState } from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import * as FileSaver from "file-saver";
import { useEffect, useState } from "react";
import { Photo } from "@/api/dtoTypes";
import { verifyToken } from "@/api";
import { loginUser } from "@/redux/slices/auth";
import { addToast } from "@/redux/slices/toast";
import { v4 } from "uuid";
import ImageModalServerComponent from "@/components/modals/ImageModalServerComponent";
import Image from "next/image";

const AlbumPage = () => {
  const authData = useSelector((state: RootState) => state.auth);
  const params = useSearchParams();
  const user = authData.user;
  const albumName = params.get("album");
  const album = user?.albums.find(
    (a) => a.name.toLowerCase() === albumName?.toLowerCase()
  );
  const [showImage, setShowImage] = useState(false);
  const [imageToShow, setImageToShow] = useState<Photo>();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (showImage) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [showImage]);

  useEffect(() => {
    (async () => {
      try {
        const user = await verifyToken();
        if (!user?.email) {
          router.replace("/login");
        } else {
          dispatch(loginUser(user));
        }
      } catch (e) {
        router.push("/login");
        dispatch(
          addToast({
            id: v4(),
            message: "Login to view your account",
            type: "error",
          })
        );
      }
      setLoading(false);
    })();
  }, []);

  if (loading)
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <span className="loading loading-ring loading-lg" />
      </div>
    );

  return (
    <div className={"md:p-12"}>
      <h1 className="text-6xl p-12 md:p-0">{albumName}</h1>
      {album?.photos.map((photo) => (
        <div
          key={photo.id}
          className={
            "bg-primary p-3 rounded-md flex flex-col md:flex-row items-center mb-12"
          }
        >
          <div className="relative h-[70vh] md:h-screen w-full md:w-3/4">
            <Image
              fill
              objectFit="cover"
              alt={album.name + " photo"}
              src={photo.url}
            />
          </div>
          <div className="flex flex-col justify-center items-center m-auto">
            <div className="flex flex-col gap-3 p-4">
              <button
                onClick={() => {
                  FileSaver.saveAs(photo.url, photo.id + ".jpg");
                }}
                className="btn btn-outline btn-accent"
              >
                Download
              </button>
              <button className="btn btn-outline btn-accent">
                Order Print
              </button>
              <button
                onClick={() => {
                  // setImageToShow(photo);
                  // setShowImage(true);
                  router.push(
                    "/account/albums?album=" +
                      album.name +
                      "&image-url=" +
                      photo.url,
                    { scroll: false }
                  );
                }}
                className="btn btn-outline btn-accent"
              >
                View Full Size
              </button>
            </div>
          </div>
        </div>
      ))}
      <ImageModalServerComponent
        returnUrl={"/account/albums?album=" + album?.name}
      />
    </div>
  );
};

export default AlbumPage;
