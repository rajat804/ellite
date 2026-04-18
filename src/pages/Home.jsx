import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import PetServices from '../components/PetServices'
import BoardingFeatures from '../components/BoardingFeatures'

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <BoardingFeatures />
      <WhyChooseUs />
      <PetServices />
    </>
  )
}

export default Home
