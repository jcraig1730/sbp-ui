import dynamic from "next/dynamic";
import Link from "next/link";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

const PortraitPortfolio = () => {
  return (
    <div className="px-8 lg:px-28 py-14 text-accent">
      <h1 className={"text-6xl text-accent pb-6 "}>Portraits</h1>
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
                // width: "95%",
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
