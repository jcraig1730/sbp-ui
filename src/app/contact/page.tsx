import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shelby Bolden Photography",
  description:
    "About Shelby Bolden -- Professional Photographer in Warner Robins, Georgia",
};

function ContactPage() {
  return (
    <StandardPageWrapper title="Contact">
      <ContactForm />
    </StandardPageWrapper>
  );
}

export default ContactPage;
