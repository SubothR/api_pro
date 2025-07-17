import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Api_Pro.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

export default function HeroSection() {
  const handleGetStarted = () => {
    alert("Get Started clicked!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(180deg, #000428 0%, #004e92 100%)",
      }}
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl w-full rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex-shrink-0"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={Logo} alt="API Pro Logo" className="w-40 sm:w-48 md:w-90" />
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 max-w-xl text-center lg:text-center text-white"
          variants={itemVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Effortless API Management. Powerful Results
          </h1>
          <p className="text-lg sm:text-xl">
            API PRO is the all-in-one platform designed to take your APIs from
            development to production with unparalleled speed, security, and
            AI-driven insights.
          </p>

          <motion.button
            onClick={handleGetStarted}
            className="w-[80%] mx-auto mt-4 bg-gradient-to-b from-[#da3cc5] to-[#6b7ede] 
                       hover:from-[#da3cc555] text-white font-bold text-xl 
                       shadow-2xl shadow-black py-3 rounded-xl focus:outline-none 
                       focus:ring-4 focus:ring-pink-500 focus:ring-opacity-60"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            Get Started for Free
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
