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
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338520/z4y3l8zoplgdicdoskke.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211438/639A6231-d00d65a3_aeslyy.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211521/Tweaks4-d535227c_ywzjrn.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211565/639A9706-3e96695b_ajqsf6.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338522/vr4lmqtz54j9ycfqcphw.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338521/fsgqab5vy9f5c8o3zfl5.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338517/nrifzk1kr6t3nujbb5tq.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211735/639A6628-1-9ac03918_xrealt.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211812/639A9708-c6816594_vnhpzh.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696211896/639A9609-b1dfabf0_y5z5jb.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212004/639A9398-e29a6c42_qbwjhv.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338519/rwcjkphohawornjotjez.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338520/pqti9ugqd0nfz8fxnlpo.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212163/Sadie15-82448cec_d76nbm.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212267/639A5566-1-40884a52_hn5qyw.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338518/nsqzfavsnbep0rluypvd.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212356/639A0905-fc6ee21e_hcqbc1.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212413/639A5607-1-dc044aa8_cmyivo.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212787/Sadie12-cb6ac7bc_owyqez.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212857/Tweaks27-6dcb1e2d_mesoaz.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212937/Sadie3-907c7f9a_yc3h9n.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695083953/ycqbmm49pvzwppfm71nj.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213054/639A5643-1-72ea8528_gi4kzy.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338519/ibckiy4yez7j3ch77zch.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213205/Tweaks32-9931938f_so2tx6.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213263/639A9408-79b7bcff_ghczs4.jpg",
  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696213325/Sadie6-44025a3f_v8nmyu.jpg",
];

export default FamilyPhotos;
