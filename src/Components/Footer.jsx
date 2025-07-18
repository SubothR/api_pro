import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "../assets/Api_Pro.png";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
  hover: {
    scale: 1.15,
    color: "#2ED280", // green accent
    textShadow: "0px 0px 8px rgba(46, 210, 128, 0.8)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-6 py-10 mt-20"
      style={{ backgroundColor: "transparent", color: "inherit" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Logo and Text */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center sm:items-start"
        >
          <img src={Logo} width={150} alt="API Pro Logo" />
          <h2 className="text-2xl font-bold mt-2">API PRO</h2>
          <p className="text-sm">Powering developers with smart APIs.</p>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          variants={itemVariants}
          role="navigation"
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center sm:justify-start gap-6 text-lg font-medium"
        >
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Pricing", to: "/pricing" },
            { label: "Contact", to: "/contact" },
            { label: "Docs", to: "/documentations" },
          ].map(({ label, to }) => (
            <motion.div key={to} whileHover="hover" variants={itemVariants}>
              <Link
                to={to}
                className="transition-colors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Socials */}
        <motion.div
          variants={itemVariants}
          className="flex space-x-5 justify-center sm:justify-end"
        >
          {[
            { icon: <Facebook />, url: "https://facebook.com" },
            { icon: <Twitter />, url: "https://twitter.com" },
            { icon: <Instagram />, url: "https://www.instagram.com/suboth.r/" },
            { icon: <Linkedin />, url: "https://www.linkedin.com/in/suboth-r" },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.url}`}
              whileHover={{ scale: 1.3, rotate: 10, color: "#2ED280", filter: "drop-shadow(0 0 6px #2ED280)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full hover:shadow-lg transition-all"
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer Bottom Text */}
      <motion.p variants={itemVariants} className="mt-8 text-center text-xs select-none">
        &copy; {new Date().getFullYear()} API PRO. All rights reserved.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="mt-3 text-center text-xs font-semibold"
        style={{ color: "#2563eb" }}
      >
        <a href="https://www.linkedin.com/in/suboth-r" target="_blank" rel="noopener noreferrer">
          Created by Suboth.R
        </a>
      </motion.p>
    </motion.footer>
  );
}

