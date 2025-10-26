import React from 'react'
import HeroSection from '../components/HomeSections/HeroSection'
import CandidateFirst from '../components/HomeSections/CandidateFirst'
import JobLeads from '../components/HomeSections/JobLeads'
import JourneySection from '../components/HomeSections/JourneySection'

const Home = () => {
  return (
    <>
    <main className='pt-20'>
      <HeroSection/>
      <CandidateFirst/>
      <JobLeads/>
      <JourneySection/>
      </main>
    </>
  )
}

export default Home