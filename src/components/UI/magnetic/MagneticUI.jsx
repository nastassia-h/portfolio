import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../../hooks/useMousePosition';
import { distance } from '../../../utils/distance';


const MagneticUI = ({ style, className, distanceTrigger, children, onClick }) => {
   const { x, y } = useMousePosition();
   let mouseX = x;
   let mouseY = y;
   const ref = useRef()
   const offsetX = useSpring(0)
   const offsetY = useSpring(0)

   const [hovered, setHovered] = useState(false)

   useEffect(() => {
      const node = ref.current;
      const rect = node.getBoundingClientRect();
      const distanceToTrigger = rect.width * distanceTrigger;
      const distanceMouseButton = distance(
         mouseX,
         mouseY,
         rect.left + rect.width / 2,
         rect.top + rect.height / 2
      );

      if (distanceMouseButton < distanceToTrigger) {
         offsetX.set((mouseX - (rect.left + rect.width / 2)) * 0.2);
         offsetY.set((mouseY - (rect.top + rect.height / 2)) * 0.2);
      } else {
         offsetX.set(0);
         offsetY.set(0);
      }

   }, [mouseX, mouseY, ref]);

   return (
      <motion.div
         onClick={onClick}
         className={`magnetic ${className}`}
         ref={ref}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         style={{ x: offsetX, y: offsetY }}
      >
         <motion.span
            className={hovered ? 'btn-white' : 'btn-black'}
            style={style}
         >
            {children}
            <motion.div
               className={`magnetic-anim`}
               initial={{ bottom: '-200%' }}
               animate={hovered ? { bottom: '-50%' } : { bottom: '-200%' }}
               transition={{
                  duration: .4,
                  ease: [.7, .1, .3, 1],
               }}
            />
         </motion.span>
      </motion.div>
   );
};

export default MagneticUI;