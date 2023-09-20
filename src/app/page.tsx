import HeroWithBgImage from "@/components/heroes/HeroWithBgImage";
import PackageHighlight from "@/components/heroes/PackageHighlight";
import GridPhotoDivider from "@/components/photoDisplays/GridPhotoDisplay";
import Image from "next/image";
import "@stripe/stripe-js";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroWithBgImage />
      <div className={"pt-24  pb-36"}>
        <div className="px-0">
          <div className="h-max-[600px] bg-accent relative text-secondary p-6 lg:p-12 mb-24  flex flex-col lg:flex-row items-center">
            <div className="relative w-0 md:w-1/2 h-0 md:h-[500px] rounded-xl">
              <Image
                src={
                  "https://images-pw.pixieset.com/elementfield/299268951/639A6510-1-cb7469f3.jpg"
                }
                alt="adorable child raising his hands"
                fill
                objectFit="cover"
                className="overflow-hidden rounded-md"
              />
            </div>
            <div className="w-full md:w-2/4 relative p-0 md:p-4 text-center">
              <h3 className="text-2xl italic ">
                "Photography is a way of feeling, of touching, of loving. What
                you have caught on film is captured forever… It remembers little
                things, long after you have forgotten everything."
              </h3>
              <div className="text-xl">- Aaron Siskind</div>
            </div>
          </div>
          <div className="px-8 lg:px-20">
            <Link passHref href="/portfolio/families">
              <div className="bg-primary">
                <h2
                  className={
                    "text-4xl md:text-5xl lg:text-6xl text-accent text-left p-4 py-24"
                  }
                >
                  Families
                </h2>

                <div>
                  <GridPhotoDivider images={familyPhotos} />
                </div>
              </div>
            </Link>

            <div
              className=" italic text-2xl md:text-4xl lg:text-5xl drop-shadow-2xl pt-5 w-[80vw] my-12 text-center"
              style={{ textShadow: "-25px -15px 8px #55555577 " }}
            >
              "We take photos as a return ticket to a moment otherwise gone." -
              Katie Thurmes
            </div>
            <Link passHref href="/portfolio/couples">
              <div className="bg-primary">
                <h2
                  className={
                    "text-4xl md:text-5xl lg:text-6xl text-accent text-right p-4 py-24"
                  }
                >
                  Couples
                </h2>

                <div>
                  <GridPhotoDivider images={couplePhotos} />
                </div>
              </div>
            </Link>

            <div
              className="italic text-2xl md:text-4xl lg:text-5xl drop-shadow-2xl pt-5 w-[80vw] my-12 text-right"
              style={{ textShadow: "-25px -15px 8px #55555577 " }}
            >
              "Taking pictures is savoring life intensely, every hundredth of a
              second." - Marc Riboud
            </div>

            <Link passHref href="/portfolio/portraits">
              <div className="bg-primary">
                <h2
                  className={
                    "text-4xl md:text-5xl lg:text-6xl text-accent text-left p-4 py-24"
                  }
                >
                  Portraits
                </h2>

                <div>
                  <GridPhotoDivider images={portraitPhotos} />
                </div>
              </div>
            </Link>
          </div>
          <div className="py-6 md:py-12 lg:py-16" />
          <PackageHighlight />
        </div>
      </div>
    </div>
  );
}

const familyPhotos = [
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/639A9347-8ccdb338.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/639A6083-1-d11dcffd.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/Tweaks17-5743331d.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/Tweaks23-43ea3dc0.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/639A6322-0679105f.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/639A6510-1-cb7469f3.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/639A0138-18ff3b8d.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/299268951/639A6592-1-9de1f7cf.jpg",
    alt: "portfolio image",
  },
];

const couplePhotos = [
  {
    src: "https://images-pw.pixieset.com/elementfield/820368951/639A1686-3-d6444ff1.jpg",
    alt: "couple sample photo",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/820368951/639A8849-09bac570.jpg",
    alt: "couple sample photo",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/820368951/639A6767-3d0201ab.jpg",
    alt: "couple sample photo",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/820368951/639A9700-b8687344.jpg",
    alt: "couple sample photo",
  },
];

const portraitPhotos = [
  {
    src: "https://images-pw.pixieset.com/elementfield/799268951/639A8076-2-2-1-63eb9314.jpg",
    alt: "portrait sample photo",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/799268951/Just_Tiff2-9bcf3b69.jpg",
    alt: "portrait sample photo",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/799268951/639A8358-2-1-dd67a809.jpg",
    alt: "portrait sample photo",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/799268951/639A7866-2-1-90c5ca48.jpg",
    alt: "portrait sample photo",
  },
];
