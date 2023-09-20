import Link from "next/link";

const PackageHighlight = () => {
  return (
    <div className="hero min-h-screen bg-primary text-accent">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images-pw.pixieset.com/elementfield/638381261/639A4063-1-54c5fedf.jpg"
          className="max-w-sm rounded-lg shadow-2xl mask mask-heart"
          width="50%"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Explore Our Photography Packages
          </h1>
          <p className="py-6">
            Discover the Perfect Package for You! 📸 Whether you're celebrating
            love, family, or individual milestones, we have tailored packages to
            suit every special moment. Explore our options and find the one that
            captures your story beautifully.
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
