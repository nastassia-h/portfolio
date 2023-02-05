import React, { useEffect } from 'react'
import { motion, useScroll, useMotionValue, transform } from 'framer-motion'

const RoundedDiv = ({ className }) => {
   const scaleY = useMotionValue(0)
   const { scrollYProgress } = useScroll()

   useEffect(() => {
      function updateY() {
         const NewscaleY = transform(scrollYProgress.get(), [.85, 1], [1, 0])
         scaleY.set(NewscaleY)
      }

      const unsubscribeScroll = scrollYProgress.on("change", updateY)

      return () => unsubscribeScroll()
   }, []);
   return (
      <div className='rounded-div-wrapper'>
         <motion.div
            className={`rounded-div ${className}`}
            style={{ scaleY }}
         >

         </motion.div>
      </div>
   )
}

export default RoundedDiv