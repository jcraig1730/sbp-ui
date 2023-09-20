import Image from "next/image";
import { useEffect } from "react";

interface GridPhotoDividerProps {
  images: { src: string; alt: string }[];
}

const GridPhotoDivider = (props: GridPhotoDividerProps) => {
  return (
    <div className="carousel sm:grid sm:grid-cols-4">
      {props.images.map(({ src, alt }) => {
        return (
          <img key={src} src={src} alt={alt} className="carousel-item h-full" />
        );
      })}
    </div>
  );
};

export default GridPhotoDivider;
