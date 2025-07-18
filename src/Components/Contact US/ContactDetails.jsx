import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

export default function ContactDetails() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  const contactItems = [
    {
      title: "Our Office",
      icon: <CiLocationOn size={29} aria-hidden="true" />,
      detail: "123 Tech Avenue, Innovation City, Connectiville 45678",
    },
    {
      title: "Email Us",
      icon: <CiMail size={29} aria-hidden="true" />,
      detail: "hello@apipro.com",
    },
    {
      title: "Call Us",
      icon: <CiPhone size={29} aria-hidden="true" />,
      detail: "+1 (555) 123-4567",
    },
  ];

  return (
    <div
      className="pt-6 space-y-6 max-w-md mx-auto 
                 sm:max-w-full sm:space-y-3 
                 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0"
    >
      {contactItems.map((item, i) => (
        <motion.div
          key={item.title}
          className="bg-[#00000088] p-5 rounded-xl flex flex-col sm:flex-row sm:items-center sm:gap-4 flex-1"
          initial="hidden"
          animate="visible"
          custom={i}
          variants={fadeInUp}
          role="region"
          aria-labelledby={`${item.title.replace(/\s+/g, "-").toLowerCase()}-label`}
        >
          <div className="flex-shrink-0 text-cyan-400 mb-3 sm:mb-0">{item.icon}</div>
          <div>
            <h2
              id={`${item.title.replace(/\s+/g, "-").toLowerCase()}-label`}
              className="text-xl sm:text-2xl font-semibold mb-1 text-white"
            >
              {item.title}
            </h2>
            <p className="text-gray-200 text-sm sm:text-base font-medium break-words">
              {item.detail}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
