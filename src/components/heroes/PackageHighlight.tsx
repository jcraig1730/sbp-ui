import Image from "next/image";
import Link from "next/link";

const PackageHighlight = () => {
  return (
    <div className="hero min-h-screen bg-primary text-accent flex flex-col justify-center items-center">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="relative max-w-sm w-full lg:w-1/2 h-[400px] rounded-lg shadow-2xl mask mask-heart">
          <Image
            src="https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696214223/639A4063-1-54c5fedf_ukrozn.jpg"
            alt="Photography Highlight"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Explore Our Photography Packages
          </h1>
          <p className="py-6">
            Discover the Perfect Package for You! 📸 Whether you&apos;re
            celebrating love, family, or individual milestones, we have tailored
            packages to suit every special moment. Explore our options and find
            the one that captures your story beautifully.
          </p>

          <Link href="/pricing" passHref>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageHighlight;
