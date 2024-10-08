import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import AboutContent from '../Components/AboutContent';



const About = () => {
  return (
    <>
     <Navbar/>
     <HeroImage2 heading="ABOUT" text="Im a friendly Full Stack Web Developer"/>
     <AboutContent/>
     <Footer/>
    </>
  )
}

export default About
