import dynamic from "next/dynamic";
import PortfolioPhotoList from "@/components/photoDisplays/PortfolioPhotoList";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { Metadata } from "next";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

export const metadata: Metadata = {
  title: "Shelby Bolden Photography Couples Portfolio",
  description:
    "Shelby Bolden Photography -- Couples Portofio, Couples Photos, Wedding Photos, Engagement Photos -- Professional Photographer in Warner Robins, Georgia",
};

const CouplesPortfolio = () => {
  return (
    <StandardPageWrapper title={"Couples Photos"}>
      <PortfolioPhotoList
        baseUrlForModal="/portfolio/couples?image-url="
        images={images}
        portfolioTitle="Couples"
      />
      <ImageModalServerComponent
        alt="couples portfolio image"
        returnUrl="/portfolio/couples"
      />
    </StandardPageWrapper>
  );
};

const images = [
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340065/gzo8chedtvb6h6douogz.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340064/gticmgkzj6qkixtf5age.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696210543/639A9386-6a32d07a_gk99bd.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696210620/639A8498-df699be6_kaghir.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696210673/639A8654-f689d3d1_wwxueu.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696210712/639A8672-c6440169_zz4f3e.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696210800/639A6840-1-f520305a_mrtt9s.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340064/bqyerkbnh4orh4unp08w.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696210999/Tweaks6-b4ba6abf_c1q9if.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211074/639A1665-2-1e6f91ef_ryzzal.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340063/woce5asyg8wzpdjmwdkj.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211175/639A1688-2-79c8e9a2_hoff9d.jpg",
];

export default CouplesPortfolio;
