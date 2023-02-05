import React, { useEffect } from 'react'
import TransitionScreen from '../components/UI/transitions/TransitionScreen'
import { motion, useScroll, useMotionValue, transform } from 'framer-motion'
import Stripe from '../components/UI/Stripe'
import MagneticBtn from '../components/UI/magnetic/MagneticBtn'
import Globe from '../components/UI/Globe.jsx'
import RoundedDiv from '../components/UI/RoundedDiv.jsx'
import { BsArrowDownRight } from 'react-icons/bs'
import Title from '../components/elements/Title.jsx'

const AboutPage = () => {
   const y = useMotionValue(0)
   const rotate = useMotionValue(0)
   const imageY = useMotionValue(0)
   const { scrollYProgress } = useScroll()

   useEffect(() => {
      window.scrollTo(0, 0);
      function updateY() {
         const newY = transform(scrollYProgress.get(), [0, 0.4], [0, 90])
         const newImageY = transform(scrollYProgress.get(), [0, 0.6], [0, 200])
         y.set(newY)
         imageY.set(newImageY)
         rotate.set(newY - 45)
      }

      const unsubscribeScroll = scrollYProgress.on("change", updateY)
      return () => unsubscribeScroll()
   }, []);

   return (
      <>
         <div className='aboutpage'>
            <div className='aboutpage-body'>
               <motion.div
                  className='aboutpage-container container'
                  initial={{ y: '15%' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', delay: 1.6, }}
               >
                  <motion.div className='aboutpage-inner'
                     initial={{ y: '10%' }}
                     animate={{ y: 0 }}
                     transition={{ type: 'spring', delay: 1.7 }}

                  >
                     <Title text={'Helping to glow up in the digital!'} />
                     <div className='footer-wrap'>
                        <Stripe className={'footer'} />
                        <div>
                           <MagneticBtn className='aboutpage-wrap-btn' style={{ borderRadius: '50%', backgroundColor: 'var(--color-wine)' }}>
                              <div className='footer-wrap-btn__text'><Globe style={{ width: '50px', height: '50px' }} /></div>
                           </MagneticBtn>
                        </div>
                     </div>
                  </motion.div>
                  <motion.div className='aboutpage-row'
                  >
                     <motion.div
                        className='aboutpage-row__arrow'
                        style={{ rotate }}
                     >
                        <BsArrowDownRight fontSize={18} />
                     </motion.div>
                     <motion.div
                        className='aboutpage-row__text'
                        style={{ y }}
                     >
                        I am studying Web application development at the University of Silesia. With each project, I push my work to new horizons, always putting quality first.
                     </motion.div>
                     <div
                        className='aboutpage-row__image'
                     >
                        <motion.div
                           className='aboutpage-row__image-inner ibg'
                           style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/about.jpg)`, y: imageY }}
                        ></motion.div>
                     </div>
                  </motion.div>
                  <div className='aboutpage-skills'>
                     <div className='aboutpage-skills__title'>My main skills...</div>
                     <div className='aboutpage-skills__inner'>
                        <div className='aboutpage-skills-col'>
                           <p className='aboutpage-skills-col__number'>01</p>
                           <Stripe className={'skills'} />
                           <p className='aboutpage-skills-col__title'>Development</p>
                           <div className='aboutpage-skills-col__icons'>
                              <i className="devicon-react-original-wordmark colored"></i>
                              <i className="devicon-redux-original colored"></i>
                              <i className="devicon-html5-plain-wordmark colored"></i>
                              <i className="devicon-css3-plain colored"></i>
                              <i className="devicon-typescript-plain colored"></i>
                              <i className="devicon-cplusplus-line-wordmark colored"></i>
                              <i className="devicon-java-plain colored"></i>
                              {/* <i class="devicon-jest-plain colored"></i>
                              <i color='black' class="devicon-react-original"></i>
                              <i class="devicon-redux-original"></i>
                              <i class="devicon-html5-plain-wordmark"></i>
                              <i class="devicon-css3-plain-wordmark"></i>
                              <i class="devicon-typescript-plain"></i>
                              <i class="devicon-java-plain"></i>
                              <i class="devicon-cplusplus-line-wordmark"></i>
                              <i class="devicon-jest-plain"></i> */}
                           </div>
                        </div>
                        <div className='aboutpage-skills-col'>
                           <p className='aboutpage-skills-col__number'>02</p>
                           <Stripe className={'skills'} />
                           <p className='aboutpage-skills-col__title'>Design</p>
                           <div className='aboutpage-skills-col__icons'>
                              <i className="devicon-photoshop-line colored"></i>
                              <i className="devicon-illustrator-line colored"></i>
                              <i className="devicon-figma-plain colored"></i>
                              {/* <i class="devicon-photoshop-line"></i>
                           <i class="devicon-illustrator-line"></i>
                           <i class="devicon-figma-plain"></i> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
            <RoundedDiv />
         </div>
         <TransitionScreen />
      </>
   )
}

export default AboutPage