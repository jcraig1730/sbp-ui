import Link from "next/link";
import dynamic from "next/dynamic";
const ImageModalServerComponent = dynamic(
  () => import("@/components/modals/ImageModalServerComponent")
);

const CouplesPortfolio = () => {
  return (
    <div className="px-8 lg:px-28 py-14 text-accent">
      <h1 className={"text-6xl text-accent pb-6 "}>Couples Photos</h1>
      <div className="md:px-8 grid grid-cols-1 md:grid-cols-2 space-y-4 space-x-4">
        {images.map((image) => (
          <Link
            key={image}
            href={"/portfolio/couples?image-url=" + image}
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
      <ImageModalServerComponent returnUrl="/portfolio/couples" />
    </div>
  );
};

const images = [
  "http://images-pw.pixieset.com/elementfield/820368951/639A9700-b8687344.jpg",
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

interface ModalProps {
  image: string;
}

const Modal = (props: ModalProps) => {
  return (
    <div>
      <dialog
        id="my_modal_2"
        className={`modal${!!props.image ? " flex" : " hidden"}`}
      >
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CouplesPortfolio;
