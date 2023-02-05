import React, { useState } from 'react'
import MagneticBtn from './UI/magnetic/MagneticBtn'
import MagneticLink from './UI/magnetic/MagneticLink'
import NavbarMenu from './menu/NavbarMenu'
import SidebarMenu from './menu/SidebarMenu'
import SocialLinks from './menu/SocialLinks'
import { MdOutlineCopyright, MdOutlineClose, MdOutlineMenu } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { Link } from 'react-router-dom'


const variants = {
   open: {
      x: 0,
      transition: {
         delayChildren: 0.2,
         when: "afterChildren",
         delay: 0.1
      }
   },
   closed: {
      x: '100%',
      transition: {
         delayChildren: 0.2,
         when: "beforeChildren",
      }
   },

}

const Navbar = () => {
   const [hovered, setHovered] = useState(false);
   const { width, height } = useWindowDimensions();
   const [showMenu, setShowMenu] = useState(false);

   const [menuBtn, setMenuBtn] = useState(false);

   const menuOpenHandler = () => {
      setShowMenu(true);
      document.body.classList.add('lock');
   }

   const menuCloseHandler = () => {
      setShowMenu(false);
      document.body.classList.remove('lock');
   }

   return (
      <>
         <motion.div className='nav-bar'
            onViewportLeave={() => setMenuBtn(true)}
            onViewportEnter={() => setMenuBtn(false)}
         >
            <motion.div className='credits-top'
            >
               <motion.div>
                  <MagneticLink distanceTrigger={0.15}>
                     <Link className='magnetic-credit' to='/'>
                        <motion.div
                           className='credits-top__icon'
                           initial={{ x: 0 }}
                           animate={{
                              rotate: hovered ? -360 : 0,
                              x: hovered ? '-50%' : 0,
                           }}
                           transition={{
                              duration: 0.35
                           }}
                        >
                           <MdOutlineCopyright color='black' />
                        </motion.div>
                        <motion.div
                           className='credits-top__title'
                           onHoverStart={() => setHovered(true)}
                           onHoverEnd={() => setHovered(false)}

                           initial={{ x: 0 }}
                           whileHover={{
                              x: '-8%',
                           }}
                           transition={{
                              duration: 0.4
                           }}
                        >
                           <motion.div
                              className='credits-top__title-inner'
                              whileHover={{
                                 x: 'calc(-4.3em)'
                              }}
                              transition={{
                                 duration: 0.4
                              }}
                           >
                              <div className='code-by'>Code by</div>
                              <div className='name'>
                                 <motion.span className='nastassia-span'>Nastya</motion.span>
                                 <motion.span
                                    initial={{
                                       x: 'calc(3.2em)'
                                    }}
                                    animate={hovered ? {
                                       visibility: 'visible',
                                       x: 'calc(1em)'
                                    } : {
                                       visibility: 'visible',
                                       x: 'calc(3.2em)'
                                    }
                                    }
                                    transition={{
                                       duration: 0.4
                                    }}
                                    className='hardzeenka'>
                                    Hardzeenka
                                 </motion.span>
                              </div>
                           </motion.div>
                        </motion.div>
                     </Link>
                  </MagneticLink>
               </motion.div>
            </motion.div>
            {
               width < 767.98 ?
                  <MagneticBtn onClick={menuOpenHandler} className='magnetic-menu' distanceTrigger={0.4}>
                     Menu
                  </MagneticBtn>
                  :
                  <NavbarMenu />
            }
         </motion.div >
         <motion.div className='side-bar'
            initial={{
               x: '100%'
            }}
            animate={showMenu ? "open" : "closed"}
            variants={variants}

         >
            <motion.div
               className='side-bar-rounded'
               animate={showMenu ? {
                  borderRadius: '100%',
                  x: width >= 767.98 ? '-1%' : '-100%',
                  scale: 1.5
               } : {
                  borderRadius: '100%',
                  x: '100%',
                  scale: 1.5,
               }}
               transition={showMenu ? {
                  duration: width >= 767.98 ? .8 : 1.5,
               } : {
                  delay: width >= 767.98 ? .9 : .4,
                  duration: 1.6
               }}
            >
            </motion.div>
            <motion.div
               transition={showMenu ? {
                  delay: 0.5,
               } : {
                  delay: 1,
                  duration: 2
               }}
               className='side-bar-inner'>
               <MagneticBtn onClick={menuCloseHandler} className='magnetic-btn sidebar' style={{ backgroundColor: 'var(--color-wine)' }} distanceTrigger={0.4}>
                  <MdOutlineClose fontSize={36} />
               </MagneticBtn>
               <div>
                  <div className='side-bar-title'>Navigation</div>
               </div>
               <SidebarMenu visible={showMenu} setVisible={setShowMenu} />
               <div className='side-bar__socials'>
                  <div className='side-bar-title'>Socials</div>
                  <SocialLinks />
               </div>
            </motion.div>
         </motion.div>
         <AnimatePresence >
            {menuBtn &&
               <motion.div className='magnetic-outline-btn' key='magnetic-menu-btn'
                  initial={{ y: '-100%', opacity: 0, scale: 0 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: '50%', opacity: 0, scale: 0 }}
               >
                  <MagneticBtn onClick={menuOpenHandler} style={{ backgroundColor: 'var(--color-dark)', border: 'none' }} distanceTrigger={0.5}>
                     <MdOutlineMenu fontSize={18} />
                  </MagneticBtn>
               </motion.div>
            }
         </AnimatePresence>
      </>
   )
}

export default Navbar