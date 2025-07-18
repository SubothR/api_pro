import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Api_Pro.png";

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "AboutUs", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "API Docs", path: "/documentations" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) setShowNav(true);
      else if (currentScrollY > lastScrollY.current) setShowNav(false);
      else setShowNav(true);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.09 },
    }),
    hover: { scale: 1.1, color: "#00FFD1" },
  };

  const mobileMenuVariants = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { type: "spring", stiffness: 80, damping: 20 },
  };

  return (
    <>
      {/* Top Navbar */}
      <motion.div
        className="fixed top-0 left-0 w-full z-[100] p-4"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ zIndex: 200 }}
      >
        <div className="bg-[#00000080] backdrop-blur-xl rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-3">
          
            <Link to="/" className="flex items-center gap-2">
              <motion.img
                src={Logo}
                alt="API Pro"
                className="rounded-2xl w-[45px]"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            
            <div className="hidden lg:flex items-center gap-8">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={menuItemVariants}
                >
                  <Link
                    to={link.path}
                    className={`text-lg font-semibold transition-all ${
                      location.pathname === link.path
                        ? "text-[#2ED280] scale-105"
                        : "text-white hover:text-[#2ED280]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r cursor-pointer from-pink-500 to-purple-600 hover:opacity-90 transition-all px-5 py-2 text-lg font-bold text-white rounded-xl shadow-lg"
                >
                  Pricing
                </motion.button>
              </Link>
            </div>

            
            <div className="lg:hidden cursor-pointer">
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                whileTap={{ scale: 0.9 }}
                className=" cursor-pointer"
              >
                {menuOpen ? <X size={30} className=" cursor-pointer" /> : <Menu size={30} className=" cursor-pointer"/>}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 flex flex-col items-center pt-24 gap-8 px-6"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderBottomLeftRadius: "24px",
              borderBottomRightRadius: "24px",
            }}
          >
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                variants={menuItemVariants}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-white"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <Link
              to="/pricing"
              className="w-[80%] mt-6 cursor-pointer py-3 text-lg font-bold text-white rounded-2xl shadow-xl"
              onClick={() => setMenuOpen(false)}
              style={{
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  border: "none",
                }}
            >
              <motion.button
                className=" w-[100%] cursor-pointer text-lg font-bold text-white rounded-2xl "

                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
