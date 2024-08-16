import React from 'react'
import Banner1 from '../components/elements/Banner1'
import Claim from '../components/elements/Claim'
import Hero from '../components/elements/Hero'
import Hero1 from '../components/elements/Hero1'
import Partner from '../components/elements/Partner'
import Section1 from '../components/elements/Section1'
import Section2 from '../components/elements/Section2'
import Section4 from '../components/elements/Section4'
import WhatWeDo from '../components/elements/WhatWeDo'
import Form from '../components/utils/Form'

function Home() {
  return (
    <>
    <Form/>
    <Hero1/>
    <Banner1/>
    <Hero/>
    <Section4/>
    <Section1/>
    <Section2/>
    <WhatWeDo/>
    <Claim/>
    <Partner/>
    </>
  )
}

export default Home