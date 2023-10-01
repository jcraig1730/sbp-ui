import { Metadata } from "next";
import StripeWrapper from "./StripeWrapper";

export const metadata: Metadata = {
  title: "Book Photography Appointment",
  description:
    "Book a Professional Photography Appointment in Warner Robins, Georgia",
};

const Book = () => {
  return <StripeWrapper />;
};

export default Book;
