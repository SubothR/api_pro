import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Api_Pro.png";
import { Link } from "react-router-dom";
import FeaturesSection from "../Components/HomePage/FeaturesSection";
import HeroSection from "../Components/HomePage/HeroSection";
import SocialProofSection from "../Components/HomePage/SocialProofSection";


function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturesSection />
      <SocialProofSection/>
    </>
  );
}

export default Home;
