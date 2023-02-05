import { motion } from 'framer-motion'
const Cursor = ({ title, hovered, x, y }) => {
   return (
      <motion.div
         className='view-cursor'
         initial={{ scale: 0, left: x, top: y }}
         animate={hovered ? { left: x - 50, top: y - 50, scale: 1 } : { left: x - 50, top: y - 50, scale: 0 }}
         transition={{ left: { type: 'spring', stiffness: 80 }, top: { type: 'spring', stiffness: 80 }, opacity: { ease: [0.3, 0, 0.7, 0], duration: .3, type: 'tween' } }}
      >
         {title}
      </motion.div>
   )
}

export default Cursor