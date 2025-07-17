import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 60 },
    }),
  };

  const inputGroupStyle = "relative w-full";
  const inputStyle =
    "peer w-full p-3 pt-5 bg-[#252525] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900";
  const labelStyle =
    "absolute left-3 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${formData.fullName}!`);
    setFormData({ fullName: "", email: "", company: "", message: "" });
  };

  return (
    <div
      id="contactform"
      className="w-full min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background: "linear-gradient(180deg, #000428 20%, transparent 80%)",
      }}
    >
      <motion.div
        className="w-full max-w-lg sm:max-w-xl md:max-w-3xl p-3 md:p-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 20, transition: { duration: 0.5 } },
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
          Contact Us
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {[
            {
              label: "Full Name",
              type: "text",
              name: "fullName",
              required: true,
            },
            {
              label: "Work Email",
              type: "email",
              name: "email",
              required: true,
            },
            { label: "Company Name (Optional)", type: "text", name: "company" },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeUp}
              className={inputGroupStyle}
            >
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                required={field.required}
                placeholder=" "
                className={inputStyle}
                autoComplete={field.name === "email" ? "email" : "off"}
              />
              <label className={labelStyle}>{field.label}</label>
            </motion.div>
          ))}

          {/* Message Field */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className={inputGroupStyle}
          >
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              placeholder=" "
              className={`${inputStyle} resize-none `}
            />
            <label className={labelStyle}>Your Message</label>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center pt-4"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 w-full shadow-black cursor-pointer text-white font-semibold py-3 px-6 rounded-xl shadow hover:bg-blue-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
