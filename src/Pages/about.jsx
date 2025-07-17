import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MissonSection from '../Components/About Us/MissonSection';
import Members from '../Components/About Us/Members';


function About() {
  return (
    <>
    <MissonSection/>
    <Members/>
    </>
  )
}

export default About;