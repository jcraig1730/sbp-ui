import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import PortfolioPhotoList from "@/components/photoDisplays/PortfolioPhotoList";
import dynamic from "next/dynamic";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

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
  "http://images-pw.pixieset.com/elementfield/799268951/Just_Tiff1-c3457b07.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A8312-2-1-60dcfbee.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A5425-461b4e2a.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/Just_Tiff2-9bcf3b69.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A8076-2-2-1-63eb9314.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A8358-2-1-dd67a809.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A7866-2-1-90c5ca48.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A5233-52b240f7.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/Just_Tiff1-c3457b07.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A8312-2-1-60dcfbee.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A5425-461b4e2a.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/Just_Tiff2-9bcf3b69.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A8076-2-2-1-63eb9314.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A8358-2-1-dd67a809.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A7866-2-1-90c5ca48.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/639A5233-52b240f7.jpg",
  "http://images-pw.pixieset.com/elementfield/799268951/Just_Tiff1-c3457b07.jpg",
];

export default PortraitPortfolio;
