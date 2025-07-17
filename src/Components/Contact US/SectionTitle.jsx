import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { MessageCircleMoreIcon } from "lucide-react";
import ContactDetails from "./ContactDetails";

export default function SectionTitle() {
  // const angle = useMotionValue(0);

  // const background = useTransform(angle, (latestAngle) => {
  //   return `linear-gradient(${latestAngle}deg, #000428 0%, #004e92 100%)`;
  // });

  // useEffect(() => {
  //   const controls = animate(angle, 360, {
  //     duration: 20,
  //     repeat: Infinity,
  //     repeatType: "loop",
  //     ease: "linear",
  //   });
  //   return () => controls.stop();
  // }, [angle]);

  return (
    <motion.div
      className="flex items-center justify-center w-screen min-h-screen px-4"
      style={{ background: `linear-gradient(#004e92 0%,#000428  100%)`}}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 39 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full max-w-screen-lg mx-auto"
      >
        <section className="py-12">
          <motion.h2
            className="text-2xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.6 }}
            //viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <motion.h3
            className="text-base sm:text-xl font-medium text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Have a technical question, a sales inquiry, or just want to chat? We'd love to hear from you.
          </motion.h3>

          {/* Mobile only button */}
          <motion.div className="w-full pb-4 sm:hidden">
            <a href="#contactform" aria-label="Jump to Contact Form">
              <button
                className="bg-[#004e92] hover:bg-[#005bbb] text-white flex items-center justify-center gap-2 w-full px-4 py-2 text-lg font-semibold rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition"
                type="button"
              >
                <MessageCircleMoreIcon />
                <span>Contact Us</span>
              </button>
            </a>
          </motion.div>

          <ContactDetails />
        </section>
      </motion.div>
    </motion.div>
  );
}
