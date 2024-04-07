import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import BetterConversions from './components/BetterConversions'
import Video from './components/Video'
import AutomatedExperience from './components/AutomatedExperiance'
import SimpleAndIntuitive from './components/SimpleAndIntuitive'
import FasterConnection from './components/FasterConnections'
import Testimonial from './components/Testimonial'
function App() {

  return (
    <>
   <Header/>
   <Hero/>
   <BetterConversions/>
   
   <Video/>
   <AutomatedExperience/> 
   <SimpleAndIntuitive/>
   <FasterConnection/>
   <Testimonial/>
  </>)
}

export default App
