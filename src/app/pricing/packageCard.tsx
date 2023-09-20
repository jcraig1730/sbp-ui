import Image from "next/image";
import Link from "next/link";

export interface PackageCardProps {
  name: string;
  price: string;
  details?: string[];
  deliver?: string;
  description?: string;
  image: string;
  reverse?: boolean;
}

const PackageCard = (props: PackageCardProps) => {
  return (
    <div className="card lg:card-side bg-primary shadow-xl min-h-[350px]">
      <figure className="w-full h-[350px]  lg:w-2/5 relative">
        <Image
          src={props.image}
          alt="sample photo"
          fill
          objectFit="cover"
          className="overflow-hidden"
          placeholder="empty"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        {props.details && (
          <ul>
            {props.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        {props.description && <p>{props.description}</p>}
        {props.deliver && <p>{props.deliver}</p>}
        {props.price}
        <div className="card-actions justify-end">
          <Link href={"/book" + "?package=" + props.name} passHref>
            <button className="btn btn-accent">Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
