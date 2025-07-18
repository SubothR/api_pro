import React from "react";
import SectionTitle from "../Components/Contact US/SectionTitle";
import ContactForm from "../Components/Contact US/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <SectionTitle />
      <ContactForm />
    </div>
  );
}
