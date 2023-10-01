import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import PackageCard, { PackageCardProps } from "./packageCard";
import { Metadata } from "next";

const packages: PackageCardProps[] = [
  {
    name: "Package 1",
    details: [
      "20 high resolution images",
      "Online gallery",
      "1 hour",
      "Print release",
    ],
    deliver: "All images are delivered through online gallery.",
    price: "$195.00",
    image:
      "http://images-pw.pixieset.com/elementfield/799268951/639A8312-2-1-60dcfbee.jpg",
  },
  {
    name: "Package 2",
    details: [
      "30 high resolution images",
      "Online gallery",
      "1 hour",
      "Print release",
    ],
    deliver: "All images are delivered through online gallery.",
    price: "$225.00",
    image:
      "https://images-pw.pixieset.com/elementfield/299268951/639A6592-1-9de1f7cf.jpg",
  },
  {
    name: "Package 3",
    details: [
      "40 high resolution images",
      "Online gallery",
      "1 hour",
      "Print release",
    ],
    deliver: "All images are delivered through online gallery.",
    price: "$315.00",
    image:
      "https://images-pw.pixieset.com/elementfield/299268951/Tweaks17-5743331d.jpg",
  },
  {
    name: "Lifestyle Newborn",
    details: ["Full Gallery", "Unlimited time", "Print release"],
    deliver: "All images are delivered through online gallery.",
    price: "$400.00",
    image:
      "https://images-pw.pixieset.com/elementfield/299268951/Sadie3-907c7f9a.jpg",
  },
  {
    name: "Wedding/Engagement",
    description:
      "For wedding inquiries please email in the contact tab to discuss more about the big day!",
    price: "$2,000.00",
    image:
      "http://images-pw.pixieset.com/elementfield/820368951/639A6767-3d0201ab.jpg",
  },
];

export const metadata: Metadata = {
  title: "Shelby Bolden Photography Pricing",
  description:
    "Shelby Bolden Photography -- Price list, Packages, Photo Specials, Warner Robins Photography -- Professional Photographer in Warner Robins, Georgia",
};

const Pricing = () => {
  return (
    <StandardPageWrapper title="Packages">
      <div className="space-y-12 px-8">
        {packages.map((pkg) => (
          <PackageCard {...pkg} key={pkg.name} />
        ))}
      </div>
    </StandardPageWrapper>
  );
};

export default Pricing;
