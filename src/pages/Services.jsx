import React from 'react'
import ServiceHeroSection from '../components/ServicesSections/ServiceHeroSection';
import ServiceCategories from '../components/ServicesSections/ServiceCategories';
import ServicesWhyChooseUs from '../components/ServicesSections/ServicesWhyChooseUs';
import Testimonials from '../components/AboutSection/Testimonials';
import ConsultationCTA from '../components/ServicesSections/ConsultationCTA';

const Services = () => {
  return (
    <>
      <main className='pt-20'>
        <ServiceHeroSection />
        <ServiceCategories />
        <ServicesWhyChooseUs />
        <Testimonials/>
        <ConsultationCTA />
      </main>
    </>
  )
}

export default Services;