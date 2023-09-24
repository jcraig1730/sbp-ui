import Image from "next/image";
import Link from "next/link";

const HeroWithBgImage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero_image_1.jpeg)",
      }}
    >
      <div className="hero-content flex flex-col justify-between h-full max-w-xl">
        <div className={"absolute"}>
          <Image
            src={"/shelby_boldon_logo.png"}
            height={200}
            width={200}
            alt={"Shelby Bolden Photography"}
          />
        </div>

        <div className=" hero-overlay bg-accent bg-opacity-20 p-4 h-fit relative top-48">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary">
            Capture Life&apos;s
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary text-right">
            Precious Moments
          </h2>
        </div>

        <div className="w-4/5 hero-overlay bg-secondary bg-opacity-50 p-4 text-center self-end flex flex-col h-fit relative bottom-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-accent pb-5">
            Timeless Photography for Your Family
          </p>
          <Link passHref href="/book" className="w-full">
            <button className="btn btn-accent ">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroWithBgImage;
