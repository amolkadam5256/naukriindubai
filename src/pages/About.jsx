import React from 'react'
import AboutHeroSection from '../components/AboutSection/AboutHeroSection'
import CompanyOverviewSection from '../components/AboutSection/CompanyOverviewSection'
import OurProcessSection from '../components/AboutSection/OurProcessSection'
import WhyChooseUs from '../components/AboutSection/WhyChooseUs'
import Testimonials from '../components/AboutSection/Testimonials'

const About = () => {
  return (
    <>
      <main className='pt-20'>
        <AboutHeroSection />
        <CompanyOverviewSection/>
        <OurProcessSection/>
        <WhyChooseUs/>
        <Testimonials/>
      </main>
    </>
  )
}

export default About