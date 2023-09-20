import Link from "next/link";

const About = () => {
  return (
    <div className={"px-8 lg:px-28 py-14 text-accent"}>
      <h1 className={"text-6xl text-accent pb-6 "}>About</h1>
      <div className="px=8 lg:px-8  pt-3 line leading-10 text-lg space-y-12 max-w-[100vw]">
        <span className="text-xl">Hi, I'm Shelby!</span>
        <br />
        <p className="text-accent">
          <img
            src={"/shelby.jpeg"}
            style={{ maxHeight: "250px" }}
            className="float-left pr-3"
            alt="Shelby"
          />
          I'm 27 years young and living the good life with my family in the
          peachy town of Warner Robins, Georgia. Born in sunny Tampa, Florida, I
          spent most of my childhood in a cozy little nook in Tennessee. I made
          my way back to Georgia in the summer of 2012, chasing my high school
          sweetheart, Drew. We had been inseparable since we started dating at
          16, even though we were partners in crime for years before that. In
          June 2015, I joyously became Mrs. Drew, and not long after, we heard
          the pitter-patter of tiny feet in our home.
          <img
            src={
              "https://images-pw.pixieset.com/elementfield/831672161/IMG_4017-c1a0eec0.jpg"
            }
            width="auto"
            alt={"Shelby with her family"}
            style={{ maxHeight: "600px" }}
            className="float-right"
          />
        </p>
        <p>
          Now, we're the proud parents of three delightful girls - Isabella,
          Blaine, and Bryar Rose - who have perfected the art of turning our
          house upside down in the cutest way possible. We're also wrangling a
          small zoo with our pups Beau Beau, a mastiff who thinks he's a lap
          dog; Sadie, a Lab mix with a serious fetch addiction; Winchester, a
          Dachshund with a Napoleon complex; and Coco, our cat who's convinced
          she's royalty.
        </p>
        <p>
          In my free time, I'm either diving into the world of true crime shows
          (don't worry, I've picked up a few detective skills), leveling up in
          video games, or embarking on some wild adventure with the fam.
        </p>
        <p>
          As a certified extrovert, I'm always ready for a chat! Whether it's
          about the latest mystery I've "solved" or the high score I just beat,
          there's never a dull moment. I've been capturing life's quirkiest and
          most heartwarming moments for two years now, and I'm dreaming big. My
          ultimate goal is to grow within photography so that, when I retire,
          I'll leave behind a legacy of precious memories and a message to my
          kids to chase their wildest dreams. Can't wait to hear from you and
          create some picture-perfect memories together!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <img style={{ maxWidth: "100%" }} src="/shelby_boldon_logo.png" />

        <Link href="/contact" passHref className="w-full">
          <div className="btn btn-primary w-full max-w-lg">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default About;
