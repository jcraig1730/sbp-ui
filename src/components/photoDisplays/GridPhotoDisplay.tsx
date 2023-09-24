import Image from "next/image";
import { useEffect } from "react";

interface GridPhotoDividerProps {
  images: { src: string; alt: string }[];
}

const GridPhotoDivider = (props: GridPhotoDividerProps) => {
  return (
    <div className="carousel sm:grid sm:grid-cols-4 w-full">
      {props.images.map(({ src, alt }) => {
        return (
          <div className="carousel-item w-full h-48 relative">
            <Image
              fill
              className="object-cover"
              key={src}
              src={src}
              alt={alt}
              // className="carousel-item h-full w-auto"
            />
          </div>
        );
      })}
    </div>
  );
};

export default GridPhotoDivider;
