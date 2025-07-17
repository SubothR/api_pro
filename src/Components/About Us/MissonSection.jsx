import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users } from "lucide-react";

export default function MissionSection() {
  const angle = useMotionValue(0);

  const background = useTransform(angle, (latestAngle) => {
    return `linear-gradient(${latestAngle}deg, #03042833, #004e9214, #0f2027, #2c5364)`;
  });

  useEffect(() => {
    const controls = animate(angle, 360, {
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeIn",
    });

    return () => controls.stop();
  }, [angle]);

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{ background }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 38 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full"
      >
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>

          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-center text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We Empower Developers to Build The Future.
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg text-gray-200 leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0,y:50 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            //viewport={{ once: true }}
          >
            In today's digital world, APIs are the backbone of innovation. Yet, managing them has become increasingly complex.
            <br /><br />
            <span className="font-medium text-white">API PRO</span> was founded on a simple principle: to give developers and businesses the tools they need to build, manage, and scale their APIs without the headache.
            <br /><br />
            We handle the complexity, so you can focus on creating amazing products.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            // viewport={{ once: true }}
          >
            <a
              href="#ourteam"
              aria-label="Meet our team"
              className="bg-[#004e92] hover:bg-[#005bbb] text-white flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all"
            >
              <Users />
              <span>Our Team</span>
            </a>
          </motion.div>
        </section>
      </motion.div>
    </motion.div>
  );
}
