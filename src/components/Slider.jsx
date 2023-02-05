import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect } from 'react';
import { works } from '../data/works';
import { motion } from 'framer-motion'
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import MagneticBtn from './UI/magnetic/MagneticBtn';

const Slider = ({ activeSlide, x, y, hovered }) => {
   const swiperRef = useRef()
   const { width, height } = useWindowDimensions();
   const [w, setW] = useState(0)

   useEffect(() => {
      swiperRef.current.slideTo(activeSlide)
      setW(width * 0.275 / 2)
   }, [activeSlide, width])

   return (
      <motion.div
         className='works__slider'
         initial={{ scale: 0, left: x - w, top: y - w }}
         animate={hovered ? { left: x - w, top: y - w, scale: 1 } : { left: x - w, top: y - w, scale: 0 }}
         transition={{ left: { type: 'spring', stiffness: 60 }, top: { type: 'spring', stiffness: 50 }, opacity: { ease: [0.3, 0, 0.7, 0], duration: .3, type: 'tween' } }}
      >
         <Swiper
            className='works-swiper'
            slidesPerView={1}
            direction='vertical'
            onSwiper={(swiper) => swiperRef.current = swiper}
         >
            {works.map(work =>
               <SwiperSlide key={work.id} style={{ backgroundColor: `${work.color}` }} className='works-slide'>
                  <div style={{ backgroundImage: `url('${work.src}')` }} className='ibg works-slide__img'>
                     <MagneticBtn style={{ backgroundColor: 'var(--color-wine)', height: '5em', width: '5em', borderRadius: '50%' }} className={'magnetic-no-anim'} children={'View'} />
                  </div>
               </SwiperSlide>
            )}
         </Swiper>
      </motion.div>
   )
}

export default Slider