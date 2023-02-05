import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition'
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { AnimatePresence, motion } from 'framer-motion'
import { works } from '../data/works';
import { Link } from 'react-router-dom';
import Cursor from './UI/cursor/Cursor';
import MagneticBtn from './UI/magnetic/MagneticBtn';

const WorksGrid = ({ length }) => {
   const { x, y } = useMousePosition();
   const [hovered, setHovered] = useState(false)
   const { width, height } = useWindowDimensions();

   return (
      <div className='menu'
         onMouseMove={() => setHovered(true)}
         onMouseOut={() => setHovered(false)}>
         <div className='menu-container'

         >
            <div className='menu-inner'

            >
               <ul className='menu-list-grid'

               >
                  {works.slice(0, length).map(item =>
                     <WorksGridItem key={item.id} id={item.id} title={item.title} desc={item.desc} src={item.src} width={width} color={item.color} />
                  )}
               </ul>
            </div>
         </div>
         <Cursor hovered={hovered} x={x} y={y} title={'View'} />
      </div>
   )
}

export default WorksGrid

const WorksGridItem = ({ title, desc, id, src, width, color }) => {
   const [isHovered, setIsHovered] = useState(false)
   return (
      <motion.li
         className='menu-item'
      //animate={isHovered && showSlider ? { width: '105%' } : { width: '100%' }}
      //transition={{ duration: .3 }}
      //onHoverStart={() => { setActiveSlide(id); setIsHovered(true) }}
      //onHoverEnd={() => setIsHovered(false)}
      >
         <Link to={`/work/${title.toLowerCase()}`} className='menu-item__inner'>
            <motion.div
               style={{ backgroundColor: `${color}`, backgroundImage: `url('${src}')` }} className='menu-item__image'>
            </motion.div>
            <div className={`${isHovered && width >= 991.98 ? "active" : ""} menu-item__title`}>{title}</div>
            <div className={`${isHovered && width >= 991.98 ? "active" : ""} menu-item__description`}>{desc}</div>
         </Link>
      </motion.li>
   )
}
