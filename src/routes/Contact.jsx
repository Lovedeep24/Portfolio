import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import Forms from '../Components/Forms'
const Contact = () => {
  return (
    <>
      <Navbar/>
      <HeroImage2 heading="CONTACT" text="Lets Have a Chat"/>
      <Forms/>
      <Footer/>
    </>
  )
}

export default Contact
