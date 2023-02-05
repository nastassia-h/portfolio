import React, { useEffect } from 'react'
import Stripe from '../components/UI/Stripe'
import { BsArrowDownRight } from 'react-icons/bs'
import { MdOutlineCopyright } from 'react-icons/md'
import MagneticBtn from '../components/UI/magnetic/MagneticBtn'
import SocialLinks from '../components/menu/SocialLinks'
import { motion, useScroll, useMotionValue, transform } from 'framer-motion'

const Footer = () => {

   const { scrollYProgress } = useScroll();
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   useEffect(() => {
      function updateXY() {
         const newX = transform(scrollYProgress.get(), [0.85, 1], [-50, 50])
         x.set(newX)
         const newY = transform(scrollYProgress.get(), [0.85, 1], [-100, 0])
         y.set(newY)
      }

      const unsubscribeScrollXY = scrollYProgress.on("change", updateXY)
      return () => unsubscribeScrollXY()
   }, [])

   return (
      <motion.footer
         className='footer'
         style={{ y }}

      >
         <div className='container'>
            <div className='footer-inner'>
               <div className='footer-row'>
                  <div className='footer-title'><span className='footer-img ibg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/avatar.png)` }}></span>Let's work<br />together</div>
                  <div className='footer-arrow'>
                     <BsArrowDownRight color='white' size={20} />
                  </div>
               </div>
               <div className='footer-wrap'>
                  <Stripe className={'footer'} />
                  <motion.div
                     style={{ x }}
                  >
                     <MagneticBtn className='footer-wrap-btn' style={{ borderRadius: '50%', backgroundColor: 'var(--color-wine-dark)', border: 'none' }}>
                        <div className='footer-wrap-btn__text'>Get in touch</div>
                     </MagneticBtn>
                  </motion.div>
               </div>
               <div className='footer-contact'>
                  <MagneticBtn distanceTrigger={.15} style={{ borderColor: 'var(--color-wine)', backgroundColor: 'var(--color-dark)' }} className={'footer-contact-btn'}>
                     <a className='footer-contact-btn__text' href='mailto:gordeenko.na@gmail.com'>gordeenko.na@gmail.com</a>
                  </MagneticBtn>
                  <MagneticBtn distanceTrigger={.15} style={{ borderColor: 'var(--color-wine)', backgroundColor: 'var(--color-dark)' }} className={'footer-contact-btn'}>
                     <a className='footer-contact-btn__text' href='tel:+48511408556'>+48511408556</a>
                  </MagneticBtn>
               </div>
            </div>
            <div className='footer-bottom' id='contact'>
               <div className='footer-bottom__row'>
                  <div className='footer-bottom__copy'>
                     <p>Version</p>
                     <div>2023 <MdOutlineCopyright /> Edition</div>
                  </div>
                  <div className='footer-bottom__socials'>
                     <p>Socials</p>
                     <SocialLinks />
                  </div>
               </div>
            </div>
         </div>
      </motion.footer>
   )
}

export default Footer