import React from 'react'
import Hero from './Hero'
import About from './About'
import Skill from './Skill'
import Experiences from './Experiences'
import Work from './Work'
import Contact from './Contact'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <Skill />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}
