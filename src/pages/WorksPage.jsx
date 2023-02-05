import React, { useState, useEffect } from 'react'
import TransitionScreen from '../components/UI/transitions/TransitionScreen'
import { AnimatePresence, motion } from 'framer-motion'
import Title from '../components/elements/Title'
import RoundedDiv from '../components/UI/RoundedDiv'
import MagneticBtn from '../components/UI/magnetic/MagneticBtn'
import { MdOutlineMenu } from 'react-icons/md'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import WorksGrid from '../components/WorksGrid'
import WorksColumn from '../components/WorksColumn'

const WorksPage = () => {
   const { width } = useWindowDimensions();
   const [showSlider, setShowSlider] = useState(true);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <div className='workpage'>
            <div className='workpage-body'>
               <motion.div
                  className='workpage-container container'
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', delay: 1.6 }}
               >
                  <motion.div
                     initial={{ y: 100 }}
                     animate={{ y: 0 }}
                     transition={{ type: 'spring', delay: 1.7 }}
                     className='workpage-inner'>
                     <Title text={'I improve with every project'} />

                     <div className='workpage-wrap'>
                        {width >= 991.98 &&
                           <MagneticBtn onClick={() => { window.scrollTo(0, 0); setShowSlider(true) }} className='workpage-wrap-btn' style={{ borderRadius: '50%', backgroundColor: showSlider ? 'var(--color-dark)' : 'var(--color-wine)', border: 'none' }}>
                              <MdOutlineMenu fontSize={'2em'} />
                           </MagneticBtn>
                        }
                        <MagneticBtn onClick={() => { window.scrollTo(0, 0); setShowSlider(false) }} className='workpage-wrap-btn' style={{ borderRadius: '50%', backgroundColor: !showSlider ? 'var(--color-dark)' : 'var(--color-wine)', border: 'none' }}>
                           <HiOutlineSquares2X2 fontSize={'2em'} />
                        </MagneticBtn>
                     </div>

                  </motion.div>
                  {showSlider && width >= 991.98 ?
                     <AnimatePresence>
                        <motion.div
                           key={'worksColumn'}
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: .2 }}
                        >
                           <WorksColumn />
                        </motion.div>
                     </AnimatePresence>
                     :
                     <AnimatePresence>
                        <motion.div
                           key={'worksGrid'}
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: .2 }}
                        >
                           <WorksGrid />
                        </motion.div>
                     </AnimatePresence>
                  }

               </motion.div>
            </div>
            <RoundedDiv />
         </div>
         <TransitionScreen />
      </>
   )
}

export default WorksPage