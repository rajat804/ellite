import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
// import PetServices from '../components/PetServices'
import BoardingFeatures from '../components/BoardingFeatures'
import PlayHours from '../components/PlayHours'
import ServicesOverview from '../components/ServicesOverview'
import DaycareSection from '../components/DaycareSection'
import SummerSpecialMenu from '../components/SummerSpecialMenu'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <DaycareSection />
      {/* <HowItWorks /> */}
      <BoardingFeatures />
      <WhyChooseUs />
      {/* <PetServices /> */}
      <PlayHours />
      <SummerSpecialMenu />
    </>
  )
}

export default Home
