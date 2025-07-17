import React from "react";
import { motion } from "framer-motion";
import { CodeXml, LockIcon, StarsIcon } from "lucide-react";

const features = [
  {
    title: "AI-Powered Analytics",
    description:
      "Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.",
    icon: <StarsIcon size={28} className="text-[#2ED280]" />,
  },
  {
    title: "Bank-Grade Security",
    description:
      "Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority.",
    icon: <LockIcon size={28} className="text-[#2ED280]" />,
  },
  {
    title: "Superior Developer Experience",
    description:
      "With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.",
    icon: <CodeXml size={28} className="text-[#2ED280]" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto p-6 my-16">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Everything You Need in One Platform
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, icon }, i) => (
          <motion.div
            key={i}
            className="bg-[#252525] rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              delay: i * 0.2,
              type: "spring",
              stiffness: 70,
              damping: 12,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {title}
                </h3>
              </div>
              <motion.div whileHover={{ rotate: "15deg" }}>{icon}</motion.div>
            </div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
