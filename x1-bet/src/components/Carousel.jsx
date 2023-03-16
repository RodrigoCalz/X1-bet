import React from 'react'
import { Slide } from '../styles/HomeStyle'
import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/slide2.png'
import Slide3 from '../assets/slide3.png'
import { motion } from 'framer-motion'

const images = [Slide1, Slide2, Slide3]

const Carousel = () => {
  return (
    <Slide>
        <motion.h1 animate={{x: 200, y: 100}}>Carousel</motion.h1>
        {images.map()}
    </Slide>
  )
}

export default Carousel