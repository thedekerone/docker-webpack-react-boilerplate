import React from 'react'
import { Hero } from './components/Hero'
import mango from './utils/images/images.jpeg'

export default function App() {
  return (
    <div>
      <Hero />
      <img src={mango} alt='' />
    </div>
  )
}
