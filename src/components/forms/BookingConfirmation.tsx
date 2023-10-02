interface BookingConfirmationProps {
  package: string;
  date: string;
}

const BookingConfirmation = (props: BookingConfirmationProps) => {
  const formattedName = props.package[0].toUpperCase() + props.package.slice(1);
  return (
    <>
      <div className="text-2xl flex flex-col items-center">
        <h2 className="text-3xl w-full md:w-4/5 text-left mb-2">
          Review Order
        </h2>
        <div className="mb-4 flex flex-col w-full items-center md:flex-row md:justify-evenly">
          <div>
            {formattedName}
            <ul className="text-xl ml-2 mt-2">
              {packageInfo
                .find((p) => p.name === formattedName)
                ?.details.map((d) => (
                  <li key={d}>
                    <span>- {d}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <div className="my-2">
              Date: {new Date(props.date).toLocaleDateString()}
            </div>
            <div>Time: {new Date(props.date).toLocaleTimeString()}</div>
            <div className="my-2">
              {packageInfo.find((p) => p.name === formattedName)?.price}
            </div>
          </div>
        </div>
      </div>
    </>
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
      "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696214005/b8ed7ffb7116bbd626469611c2f424d9-a9148ecd_ukc8lp.jpg",
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
      "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696214070/639A1959-38-8dd556ee_tbwfp0.jpg",
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
      "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696214147/639A9552-5937facb_cv7ojy.jpg",
  },
  {
    name: "Lifestyle newborn",
    details: ["Full Gallery", "Unlimited time", "Print release"],
    deliver: "All images are delivered through online gallery.",
    price: "$400.00",
    image:
      "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696214223/639A4063-1-54c5fedf_ukrozn.jpg",
  },
];

export default BookingConfirmation;
