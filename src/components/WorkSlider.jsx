import React, { useEffect } from 'react'
import 'swiper/css';
import { worksSlider } from '../data/worksSlider';
import { motion, useMotionValue, useScroll, transform } from 'framer-motion'

const WorkSlider = ({ direction, startIndex, endIndex, index }) => {

   const x = useMotionValue(0)
   const { scrollYProgress } = useScroll()
   useEffect(() => {
      function updateX() {
         const newX = transform(scrollYProgress.get(), [0, 1], [0, 200]) * direction
         x.set(newX)
      }

      const unsubscribeScroll = scrollYProgress.on("change", updateX)

      return () => {
         unsubscribeScroll()
      }
   }, [])

   return (
      <motion.div
         className='workslider__slider'
         style={{ x }}
         transition={{ type: 'spring', stiffness: 100 }}
      >
         <div
            className='workslider-swiper'
         >
            {worksSlider.slice(startIndex, endIndex).map(work =>
               <div key={work.src} style={{ backgroundColor: `${work.color}` }} className='workslider-slide'>
                  <div style={{ backgroundImage: `url('${work.src}')` }} className='ibg workslider__img'>
                  </div>
               </div>
            )}
         </div>
      </motion.div>
   )
}

export default WorkSlider