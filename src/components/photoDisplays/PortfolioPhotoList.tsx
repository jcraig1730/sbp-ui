import Image from "next/image";
import Link from "next/link";

interface PortfolioPhotoListProps {
  images: string[];
  portfolioTitle: string;
  baseUrlForModal: string;
}

const PortfolioPhotoList = (props: PortfolioPhotoListProps) => {
  const { images, portfolioTitle, baseUrlForModal } = props;
  return (
    <div className="md:px-8 flex flex-wrap justify-between">
      {images.map((image) => (
        <div
          className="md:basis-1/2 basis-full  h-[500px] p-1 relative"
          key={image}
        >
          <Link
            href={baseUrlForModal + image}
            shallow
            passHref
            scroll={false}
            className="h-full w-full relative block"
          >
            <Image
              src={image}
              alt={portfolioTitle + "portfolio image"}
              fill
              className="object-cover"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPhotoList;
