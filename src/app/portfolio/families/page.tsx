import dynamic from "next/dynamic";
import PortfolioPhotoList from "@/components/photoDisplays/PortfolioPhotoList";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { Metadata } from "next";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

export const metadata: Metadata = {
  title: "Shelby Bolden Photography Families Portfolio",
  description:
    "Shelby Bolden Photography -- Families Portfolio, Family Photos -- Professional Photographer in Warner Robins, Georgia",
};

const FamilyPhotos = () => {
  return (
    <StandardPageWrapper title="Family Photos">
      <PortfolioPhotoList
        images={images}
        baseUrlForModal="/portfolio/portraits?image-url="
        portfolioTitle="Families"
      />
      <ImageModalServerComponent
        alt="Family portfolio image"
        returnUrl="/portfolio/portraits"
      />
    </StandardPageWrapper>
  );
};

const images = [
  "https://images-pw.pixieset.com/elementfield/299268951/639A6322-0679105f.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A6231-d00d65a3.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Tweaks4-d535227c.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A9706-3e96695b.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A6592-1-9de1f7cf.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A0138-18ff3b8d.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A9347-8ccdb338.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A6628-1-9ac03918.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A9708-c6816594.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A9609-b1dfabf0.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A9398-e29a6c42.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Tweaks22-96132848.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A6510-1-cb7469f3.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Sadie15-82448cec.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A5566-1-40884a52.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A6083-1-d11dcffd.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A0905-fc6ee21e.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A5607-1-dc044aa8.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Sadie12-cb6ac7bc.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Tweaks27-6dcb1e2d.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Sadie3-907c7f9a.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A9514-3c1dff08.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A5643-1-72ea8528.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Tweaks17-5743331d.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Tweaks32-9931938f.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/639A9408-79b7bcff.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Sadie6-44025a3f.jpg",
  "https://images-pw.pixieset.com/elementfield/299268951/Tweaks23-43ea3dc0.jpg",
];

export default FamilyPhotos;
