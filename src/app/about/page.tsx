import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Shelby Bolden Photography",
  description:
    "About Shelby Bolden -- Professional Photographer in Warner Robins, Georgia",
};

const About = () => {
  return (
    <StandardPageWrapper title="About">
      <div className="px=8 lg:px-8  pt-3 line leading-10 text-lg space-y-12 max-w-[100vw] relative">
        <span className="text-xl">Hi, I&apos;m Shelby!</span>
        <br />
        <div className="relative w-[200px] h-[250px] float-left mr-2">
          <Image
            src={"/shelby.jpeg"}
            fill
            className="object-contain"
            alt="Shelby"
          />
        </div>
        <p className="text-accent">
          I&apos;m 27 years young and living the good life with my family in the
          peachy town of Warner Robins, Georgia. Born in sunny Tampa, Florida, I
          spent most of my childhood in a cozy little nook in Tennessee. I made
          my way back to Georgia in the summer of 2012, chasing my high school
          sweetheart, Drew. We had been inseparable since we started dating at
          16, even though we were partners in crime for years before that. In
          June 2015, I joyously became Mrs. Drew, and not long after, we heard
          the pitter-patter of tiny feet in our home.
        </p>
        <div className="relative w-full lg:w-[33vw] h-[600px] lg:ml-2 float-right flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696210258/IMG_4017-c1a0eec0_sdx6ij.jpg"
            }
            fill
            alt={"Shelby with her family"}
            style={{ maxHeight: "600px" }}
            className="object-cover"
          />
        </div>
        <p>
          Now, we&apos;re the proud parents of three delightful girls -
          Isabella, Blaine, and Bryar Rose - who have perfected the art of
          turning our house upside down in the cutest way possible. We&apos;re
          also wrangling a small zoo with our pups Beau Beau, a mastiff who
          thinks he&apos;s a lap dog; Sadie, a Lab mix with a serious fetch
          addiction; Winchester, a Dachshund with a Napoleon complex; and Coco,
          our cat who&apos;s convinced she&apos;s royalty.
        </p>
        <p>
          In my free time, I&apos;m either diving into the world of true crime
          shows (don&apos;t worry, I&apos;ve picked up a few detective skills),
          leveling up in video games, or embarking on some wild adventure with
          the fam.
        </p>
        <p>
          As a certified extrovert, I&apos;m always ready for a chat! Whether
          it&apos;s about the latest mystery I&apos;ve &quot;solved&quot; or the
          high score I just beat, there&apos;s never a dull moment. I&apos;ve
          been capturing life&apos;s quirkiest and most heartwarming moments for
          two years now, and I&apos;m dreaming big. My ultimate goal is to grow
          within photography so that, when I retire, I&apos;ll leave behind a
          legacy of precious memories and a message to my kids to chase their
          wildest dreams. Can&apos;t wait to hear from you and create some
          picture-perfect memories together!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <Image
          width={500}
          height={500}
          alt={"Shelby Bolden Logo"}
          // style={{ maxWidth: "100%" }}
          src="/shelby_boldon_logo.png"
        />

        <Link href="/contact" passHref className="w-full">
          <div className="btn btn-primary w-full max-w-lg">Contact</div>
        </Link>
      </div>
    </StandardPageWrapper>
  );
};

export default About;
