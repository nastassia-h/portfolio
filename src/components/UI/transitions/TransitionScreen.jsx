import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router'

const TransitionScreen = () => {
   const { pathname } = useLocation()
   const title = pathname.split("/")[pathname.split("/").length - 1]

   return (
      <motion.div
         //initial={{ y: '-150%', scaleX: 2, scaleY: 1.5, transitionDelay: 1.8, opacity: 0 }}
         initial={{ y: '-150%', scaleX: 2, scaleY: 1.5 }}
         animate={{ y: '150%', opacity: 1, transition: { duration: 1.8, ease: [0, .8, 1, .2] } }}

         exit={{ y: '150%', transition: { duration: .9, ease: [0, .8, 1, .2] } }}
         className="transition-screen"
      >
         <div>{title === "" ? 'Home' : title}</div>
      </motion.div>
   )
}

export default TransitionScreen