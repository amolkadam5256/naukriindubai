import React from 'react'
import HeroSection from '../components/HomeSections/HeroSection'
import CandidateFirst from '../components/HomeSections/CandidateFirst'
import JobLeads from '../components/HomeSections/JobLeads'
import JourneySection from '../components/HomeSections/JourneySection'
import TrustSection from '../components/HomeSections/TrustSection'
import WhyNaukriindubai from '../components/HomeSections/WhyNaukriindubai'
import DubaiCompanies from '../components/HomeSections/DubaiCompanies'

const Home = () => {
  return (
    <>
    <main className='pt-20'>
      <HeroSection/>
      <CandidateFirst/>
      <JobLeads/>
      <JourneySection/>
      <TrustSection/> 
      <WhyNaukriindubai/>
      <DubaiCompanies/>
      </main>
    </>
  )
}

export default Home