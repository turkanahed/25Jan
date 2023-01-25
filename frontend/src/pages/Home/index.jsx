import React from 'react'
import Events from './Layouts/Events'
import Flowers from './Layouts/Flowers'
import Hero from './Layouts/Hero'
import Mission from './Layouts/Mission'
import Team from './Layouts/Team'

const Home = () => {
  return (
    <>
    <Hero/>
    <Mission/>
    <Flowers/>
    <Events/>
    <Team/>
    </>
  )
}

export default Home