import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const companies = [
  "InnovateCorp",
  "QuantumLeap Tech",
  "DataWeave Solutions",
  "NextGen Systems",
  "Apex Digital",
  "NeuraCore",
  "SkyLabs AI",
  "CodeSpark",
  "OceanNet",
];

export default function SocialProofSection() {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-16 px-3">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-10 font-poppins"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trusted by the World's Most Innovative Companies
      </motion.h2>

      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {companies.map((name, index) => (
          <div
            key={index}
            className="text-white text-lg sm:text-xl font-semibold bg-[#334155] hover:bg-[#475569] transition-colors duration-300 py-3 px-6 mx-4 rounded-md text-center shadow-md"
            style={{ fontFamily: "monospace", minWidth: "160px" }}
          >
            {name}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
