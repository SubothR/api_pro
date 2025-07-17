import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "../Components/Contact US/SectionTitle";
import ContactForm from "../Components/Contact US/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center">
        <SectionTitle />
        <ContactForm />
      </div>
    </>
  );
}
