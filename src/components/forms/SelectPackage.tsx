interface SelectPackageProps {
  selected?: string;
  setSelected: (packageName: string) => void;
}

const SelectPackage = (props: SelectPackageProps) => {
  return (
    <div className="w-[100%]">
      {packageInfo.map((pkg) => (
        <div
          className="border rounded-xl border-accent mb-2 form-control"
          key={pkg.name}
        >
          <label className=" py-8 label cursor-pointer grid grid-cols-1 md:grid-cols-4">
            <div className="text-center text-3xl">{pkg.name}</div>
            <ul className="label-text text-accent text-center md:text-left">
              {pkg.details.map((d) => (
                <li key={d} className="text-lg whitespace-nowrap">
                  <span>✓</span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="text-center">{pkg.price}</div>
            <input
              type="checkbox"
              color="accent"
              checked={props.selected?.toLowerCase() === pkg.name.toLowerCase()}
              onChange={() => {
                if (pkg.name.toLowerCase() === "lifestyle newborn") {
                  props.setSelected("lifestyle/newborn");
                }
                props.setSelected(pkg.name.toLowerCase());
              }}
              className="checkbox checkbox-accent m-auto"
            />
          </label>
        </div>
      ))}
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
    name: "Lifestyle Newborn",
    details: ["Full Gallery", "Unlimited time", "Print release"],
    deliver: "All images are delivered through online gallery.",
    price: "$400.00",
    image:
      "https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696214223/639A4063-1-54c5fedf_ukrozn.jpg",
  },
];

export default SelectPackage;
