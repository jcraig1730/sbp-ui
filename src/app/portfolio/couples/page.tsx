import dynamic from "next/dynamic";
import PortfolioPhotoList from "@/components/photoDisplays/PortfolioPhotoList";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

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
  "http://images-pw.pixieset.com/elementfield/820368951/639A6767-3d0201ab.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A9386-6a32d07a.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A8498-df699be6.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A8654-f689d3d1.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A8672-c6440169.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A6840-1-f520305a.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A8849-09bac570.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/Tweaks6-b4ba6abf.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A1665-2-1e6f91ef.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A1686-3-d6444ff1.jpg",
  "http://images-pw.pixieset.com/elementfield/820368951/639A1688-2-79c8e9a2.jpg",
];

export default CouplesPortfolio;
