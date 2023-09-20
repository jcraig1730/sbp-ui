import Link from "next/link";
import dynamic from "next/dynamic";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

const FamilyPhotos = () => {
  return (
    <div className="px-8 lg:px-28 py-14 text-accent">
      <h1 className={"text-6xl text-accent pb-6 "}>Family Photos</h1>
      <div className="md:px-8 grid grid-cols-1 md:grid-cols-2 space-y-4 space-x-4">
        {images.map((image) => (
          <Link
            key={image}
            href={"/portfolio/portraits?image-url=" + image}
            shallow
            passHref
            scroll={false}
          >
            <div
              style={{
                background: `url(${image})`,
                height: "500px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "16px",
                marginLeft: "16px",
              }}
            />
          </Link>
        ))}
      </div>
      <ImageModalServerComponent returnUrl="/portfolio/portraits" />
    </div>
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
