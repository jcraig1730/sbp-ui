import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import PortfolioPhotoList from "@/components/photoDisplays/PortfolioPhotoList";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

export const metadata: Metadata = {
  title: "Shelby Bolden Photography Portrait Portfolio",
  description:
    "Shelby Bolden Photography -- Portrait Portfolio, Individual Photos -- Professional Photographer in Warner Robins, Georgia",
};

const PortraitPortfolio = () => {
  return (
    <StandardPageWrapper title="Portraits">
      <PortfolioPhotoList
        images={images}
        baseUrlForModal="/portfolio/portraits?image-url="
        portfolioTitle="Portraits"
      />
      <ImageModalServerComponent
        alt="portrait portfolio image"
        returnUrl="/portfolio/portraits"
      />
    </StandardPageWrapper>
  );
};

const images = [
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213525/Just_Tiff1-c3457b07_duvd7g.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213645/639A8312-2-1-60dcfbee_ynkvyw.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213698/639A5425-461b4e2a_phjat3.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340066/maerbdvgvs6ds5f9x0vp.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340066/dtags9ueffit4bhot48u.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340067/vennfa7ifgix7g0apoky.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340068/plohlhesugznlprzvell.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213894/639A5233-52b240f7_gw96zo.jpg",
];

export default PortraitPortfolio;
