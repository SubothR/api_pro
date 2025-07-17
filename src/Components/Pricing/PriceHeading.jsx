import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import PricingCards from "./PriceCards";

export default function PriceHeading() {
//   const angle = useMotionValue(0);

//   // Static gradient background (you can animate if you want)
//   const;

//   useEffect(() => {
//     const controls = animate(angle, 360, {
//       duration: 20,
//       repeat: Infinity,
//       repeatType: "loop",
//       ease: "easeIn",
//     });
//     return () => controls.stop();
//   }, [angle]);

  return (
    <>
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{ background : `linear-gradient(#000428 0%, #004e92 100%)` }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 25 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full"
      >
        <section className="max-w-6xl w-full mx-auto px-6 sm:px-9 py-16 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing for Teams of All Sizes
          </motion.h2>

          <motion.h3
            className="text-xl sm:text-2xl font-semibold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Start for free and scale as you go. No hidden fees, ever
          </motion.h3>
        </section>

      </motion.div>
      <PricingCards />

    </motion.div>
</>
  );
}
