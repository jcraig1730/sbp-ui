import HeroWithBgImage from "@/components/heroes/HeroWithBgImage";
import PackageHighlight from "@/components/heroes/PackageHighlight";
import GridPhotoDivider from "@/components/photoDisplays/GridPhotoDisplay";
import Image from "next/image";
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
                  "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338520/pqti9ugqd0nfz8fxnlpo.jpg"
                }
                alt="adorable child raising his hands"
                fill
                className="overflow-hidden rounded-md object-cover"
              />
            </div>
            <div className="w-full md:w-2/4 relative p-0 md:p-4 text-center">
              <h3 className="text-2xl italic ">
                &quot;Photography is a way of feeling, of touching, of loving.
                What you have caught on film is captured forever… It remembers
                little things, long after you have forgotten everything.&quot;
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
              &quot;We take photos as a return ticket to a moment otherwise
              gone.&quot; - Katie Thurmes
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

                <div className="w-full">
                  <GridPhotoDivider images={couplePhotos} />
                </div>
              </div>
            </Link>

            <div
              className="italic text-2xl md:text-4xl lg:text-5xl drop-shadow-2xl pt-5 w-[80vw] my-12 text-right"
              style={{ textShadow: "-25px -15px 8px #55555577 " }}
            >
              &quot;Taking pictures is savoring life intensely, every hundredth
              of a second.&quot; - Marc Riboud
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
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338517/nrifzk1kr6t3nujbb5tq.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338518/nsqzfavsnbep0rluypvd.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338519/ibckiy4yez7j3ch77zch.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338519/rwcjkphohawornjotjez.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338520/z4y3l8zoplgdicdoskke.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338520/pqti9ugqd0nfz8fxnlpo.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338521/fsgqab5vy9f5c8o3zfl5.jpg",
    alt: "portfolio image",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695338522/vr4lmqtz54j9ycfqcphw.jpg",
    alt: "portfolio image",
  },
];

const couplePhotos = [
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340063/woce5asyg8wzpdjmwdkj.jpg",
    alt: "couple sample photo",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340064/bqyerkbnh4orh4unp08w.jpg",
    alt: "couple sample photo",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340064/gticmgkzj6qkixtf5age.jpg",
    alt: "couple sample photo",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340065/gzo8chedtvb6h6douogz.jpg",
    alt: "couple sample photo",
  },
];

const portraitPhotos = [
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340066/dtags9ueffit4bhot48u.jpg",
    alt: "portrait sample photo",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340066/maerbdvgvs6ds5f9x0vp.jpg",
    alt: "portrait sample photo",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340067/vennfa7ifgix7g0apoky.jpg",
    alt: "portrait sample photo",
  },
  {
    src: "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1695340068/plohlhesugznlprzvell.jpg",
    alt: "portrait sample photo",
  },
];
