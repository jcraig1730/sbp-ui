import Image from "next/image";

interface GridPhotoDividerProps {
  images: { src: string; alt: string }[];
}

const GridPhotoDivider = (props: GridPhotoDividerProps) => {
  return (
    <div className="carousel sm:grid sm:grid-cols-4 w-full">
      {props.images.map(({ src, alt }) => {
        return (
          <div className="carousel-item w-full h-48 relative" key={src}>
            <Image fill className="object-cover" src={src} alt={alt} />
          </div>
        );
      })}
    </div>
  );
};

export default GridPhotoDivider;
