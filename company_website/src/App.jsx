import React from 'react'
import Navbar from './components/NavBar'

import SimpleCSSWaves from './components/Waves'
import Section from './components/About'
import FeaturesSection from './components/Services'
import TeamSection from './components/Team'
import ContactForm from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-[#004AAD] selection:text-white'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      </div>

      <div className='container'>
        <Navbar />

        <SimpleCSSWaves />
        <Section />
        <FeaturesSection />
        <TeamSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

export default App