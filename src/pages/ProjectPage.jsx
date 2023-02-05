import React, { useEffect, useState } from 'react'
import { works } from '../data/works'
import { useLocation } from 'react-router'
import TransitionScreen from '../components/UI/transitions/TransitionScreen';
import RoundedDiv from '../components/UI/RoundedDiv';
import Stripe from '../components/UI/Stripe';
import Title from '../components/elements/Title';
import { Link } from 'react-router-dom';
import MagneticBtn from '../components/UI/magnetic/MagneticBtn'
import { motion, transform, useMotionValue, useScroll } from 'framer-motion'
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const ProjectPage = () => {
   const { pathname } = useLocation();
   const [data, setData] = useState(null);
   const { width } = useWindowDimensions();
   const up = useMotionValue(0)
   const down = useMotionValue(0)
   const { scrollYProgress } = useScroll()

   useEffect(() => {
      window.scrollTo(0, 0);
      const project = works.filter(work => work.title.toLowerCase() === pathname.split("/")[2]);
      setData(...project);
   }, [])

   useEffect(() => {
      function updateY() {
         const newY = transform(scrollYProgress.get(), [0.4, 0.7], [0, 100])
         up.set(width >= 767.98 ? -newY : (-newY / 5))
         down.set(width >= 767.98 ? newY : (newY / 5))
      }

      const unsubscribeScroll = scrollYProgress.on("change", updateY)
      return () => unsubscribeScroll()
   }, []);

   return (
      <>
         <div className='projectpage'>
            <div className='projectpage-body'>
               <motion.div className='projectpage-container container'
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', delay: 1.6 }}
               >
                  <motion.div
                     initial={{ y: 100 }}
                     animate={{ y: 0 }}
                     transition={{ type: 'spring', delay: 1.7 }}
                     className='projectpage-inner'>
                     <Title text={data?.title} />
                     <div className='projectpage-wrap'>
                        <div className='projectpage-wrap-col'>
                           <p className='projectpage-wrap__title'>Description</p>
                           <Stripe className={'skills'} />
                           <div className='projectpage-wrap__text'>{data?.description}</div>
                        </div>
                        <div className='projectpage-wrap-col'>
                           <p className='projectpage-wrap__title'>Used libs and services</p>
                           <Stripe className={'skills'} />
                           <div className='projectpage-wrap__text'>{data?.technology.map(technology => <div>{technology}</div>)}</div>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
               <section className='projectpage-poster'>
                  <MagneticBtn style={{ borderRadius: '50%', backgroundColor: 'var(--color-wine-dark)', border: 'none' }} className={'projectpage-btn'}>
                     <a target='_blank' className='projectpage-btn__text' href={data?.url}>View code</a>
                  </MagneticBtn>
                  <div className='projectpage-laptop-inner'>
                     <div className='projectpage-laptop-inner__image'>
                        <div className='overlay ibg' style={{ backgroundImage: `url(${data?.src})` }}></div>
                     </div>
                  </div>
               </section>
               <section className='projectpage-device'>
                  <div className='projectpage-laptop'>
                     <div className='projectpage-laptop-inner'>
                        <div className='projectpage-laptop-inner__video'>
                           <div className='projectpage-laptop-inner__video-inner overlay'>
                              <video className='overlay' src={data?.video} loop autoPlay muted playsInline />
                           </div>
                        </div>
                        <div className='projectpage-laptop-inner__image'>
                           <div className='projectpage-laptop-inner__image-inner ibg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/mbk.png)` }}></div>
                        </div>
                     </div>
                  </div>
                  <div className='projectpage-phone'>
                     <div className='projectpage-phone-row'>
                        <motion.div className='projectpage-phone-col'
                           style={{ y: up }}>
                           <div className='projectpage-phone-col-inner'>
                              <img className='overlay' src={data?.images[0]} alt="" />
                           </div>
                           <div className='projectpage-phone-col-image'>
                              <div className='ibg overlay' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/iphone.png)` }}></div>
                           </div>
                        </motion.div>
                        <div className='projectpage-phone-col'>
                           <div className='projectpage-phone-col-inner'>
                              <img className='overlay' src={data?.images[1]} alt="" />
                           </div>
                           <div className='projectpage-phone-col-image'>
                              <div className='ibg overlay' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/iphone.png)` }}></div>
                           </div>
                        </div>
                        <motion.div className='projectpage-phone-col'
                           style={{ y: down }}>
                           <div className='projectpage-phone-col-inner'>
                              <img className='overlay' src={data?.images[2]} alt="" />
                           </div>
                           <div className='projectpage-phone-col-image'>
                              <div className='ibg overlay' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/iphone.png)` }}></div>
                           </div>
                        </motion.div>
                     </div>
                  </div>
                  <div className='projectpage-bottom'>
                     <div className='projectpage-laptop-inner'>
                        <div className='projectpage-laptop-inner__image'>
                           <div className='overlay ibg' style={{ backgroundImage: `url(${data?.images[3]})`, borderRadius: '20px' }}></div>
                        </div>
                     </div>
                  </div>
                  <div className='projectpage-bottom container'>
                     <MagneticBtn style={{ backgroundColor: "var(--color-dark)", border: 'none' }}>
                        <Link to={data?.id < works.length - 1 ? `/work/${works[data?.id + 1].title.toLowerCase()}` : `/work`}>{data?.id < works.length - 1 ? `Next case` : `All works`}</Link>
                     </MagneticBtn>
                  </div>
               </section>
            </div>
            <RoundedDiv className={'projectpage'} />
         </div>
         <TransitionScreen />
      </>
   )
}

export default ProjectPage