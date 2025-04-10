import React from 'react'
import Hero from './Hero'
import ChooseUs from '../ChooseUs'
import Serviec from './Serviec'
import Team from './Team'
import Contact from './Contact'
import Testimonial from './Testimonial'


const Home = () => {
  return (
    <div className="">
      <Hero />
      <ChooseUs />
      <Serviec />
      <Testimonial />
      <Team />
      <Contact />
    </div>
  );
}

export default Home