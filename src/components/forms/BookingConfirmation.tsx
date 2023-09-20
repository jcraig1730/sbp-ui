import { PackageCardProps } from "@/app/pricing/packageCard";

interface BookingConfirmationProps {
  package: string;
  date: string;
}

const BookingConfirmation = (props: BookingConfirmationProps) => {
  const formattedName = props.package[0].toUpperCase() + props.package.slice(1);
  return (
    <div className="text-2xl flex flex-col items-center">
      <div className="mb-8">
        Selected Package: {formattedName}
        <ul className="ml-2 mt-2">
          {packageInfo
            .find((p) => p.name === formattedName)
            ?.details.map((d) => (
              <li key={d}>
                <span></span>
                {d}
              </li>
            ))}
          <li>
            Price {packageInfo.find((p) => p.name === formattedName)?.price}
          </li>
        </ul>
      </div>
      <div>Date: {new Date(props.date).toLocaleDateString()}</div>
      <div>Time: {new Date(props.date).toLocaleTimeString()}</div>
    </div>
  );
};

const packageInfo = [
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
      "https://images-pw.pixieset.com/elementfield/703368951/b8ed7ffb7116bbd626469611c2f424d9-a9148ecd.jpg",
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
      "https://images-pw.pixieset.com/elementfield/713368951/639A1959-38-8dd556ee.jpg",
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
      "https://images-pw.pixieset.com/elementfield/213368951/639A9552-5937facb.jpg",
  },
  {
    name: "Lifestyle newborn",
    details: ["Full Gallery", "Unlimited time", "Print release"],
    deliver: "All images are delivered through online gallery.",
    price: "$400.00",
    image:
      "https://images-pw.pixieset.com/elementfield/638381261/639A4063-1-54c5fedf.jpg",
  },
];

const result = packageInfo.find((p) => p.name === "Package 1");
export default BookingConfirmation;
