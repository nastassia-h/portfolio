import React from 'react'
import { useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition'
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { motion } from 'framer-motion'
import { works } from '../data/works';
import { Link } from 'react-router-dom';
import Cursor from './UI/cursor/Cursor';

const WorksGrid = ({ length }) => {
   const { x, y } = useMousePosition();
   const [hovered, setHovered] = useState(false)
   const { width } = useWindowDimensions();

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
   return (
      <motion.li
         className='menu-item'
      >
         <Link to={`/work/${title.toLowerCase()}`} className='menu-item__inner'>
            <motion.div
               style={{ backgroundColor: `${color}`, backgroundImage: `url('${src}')` }} className='menu-item__image'>
            </motion.div>
            <div className={`menu-item__title`}>{title}</div>
            <div className={`menu-item__description`}>{desc}</div>
         </Link>
      </motion.li>
   )
}
