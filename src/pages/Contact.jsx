import React from 'react'
import ContactHeroSection from '../components/ContactSection/ContactHeroSection'
import ContactInfoSection from '../components/ContactSection/ContactInfoSection'
import ContactFormSection from '../components/ContactSection/ContactFormSection'
import ConsultationCTA from '../components/ServicesSections/ConsultationCTA'

const Contact = () => {
  return (
    <>
      <main className='pt-20'>
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
        <ConsultationCTA/>
      </main>
    </>
  )
}

export default Contact