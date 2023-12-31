"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface ImageModalProps {
  returnUrl: string;
  alt: string;
}

const ImageModalServerComponent = (props: ImageModalProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const imageUrl = searchParams.get("image-url");
  useEffect(() => {
    if (imageUrl) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [imageUrl]);
  if (!imageUrl) return null;
  return (
    <div
      onClick={() => {
        router.replace(props.returnUrl, { scroll: false });
      }}
      className={`z-[999] w-[100vw] h-[100vh] fixed top-0 left-0 flex items-center justify-center bg-secondary bg-opacity-90`}
    >
      <Image
        alt={props.alt}
        src={imageUrl}
        className="max-w-full max-h-full object-contain"
        fill
      />
    </div>
  );
};

export default ImageModalServerComponent;
