import React from 'react'
import Hero from '../../components/student/Hero'
import Comapnies from '../../components/student/Comapnies'
import CourseSection from '../../components/student/CouRseSection'
import CallToAction from '../../components/student/callToAction'
import Footer from '../../components/student/Footer'
import Testimonials from '../../components/student/Testimonials'

const Home = () => {
  return (
    <div className='flex flex-col itmes-center space-y-7 text-center'>
      <Hero />
      <Comapnies />
      <CourseSection />
      <Testimonials />
      <CallToAction />
      <Footer />
      
    </div>
  )
}

export default Home
