import React, { useState, useEffect } from 'react'
import TransitionScreen from '../components/UI/transitions/TransitionScreen'
import WorksColumn from '../components/WorksColumn'
import { motion, useScroll, useMotionValue, transform, AnimatePresence } from 'framer-motion'
import MagneticBtn from '../components/UI/magnetic/MagneticBtn'
import WorkSlider from '../components/WorkSlider'
import { BsArrowDownRight } from 'react-icons/bs'
import Globe from '../components/UI/Globe'
import { Link } from 'react-router-dom'
import RoundedDiv from '../components/UI/RoundedDiv'

const HomePage = () => {
   const [playMarquee, setPlayMarquee] = useState(false);
   const y = useMotionValue(0)
   const { scrollYProgress } = useScroll()

   useEffect(() => {
      function updateY() {
         const newY = transform(scrollYProgress.get(), [0, 0.4], [0, 100])
         y.set(newY)
      }

      const unsubscribeScroll = scrollYProgress.on("change", updateY)
      const timer = setTimeout(() => {
         setPlayMarquee(true);
      }, 2000);
      return () => { clearTimeout(timer); unsubscribeScroll() }
   }, []);

   return (
      <>
         <div className='homepage'>
            <Banner />
            <About />
            <div className='workgrid-container container'>
               <div className='workgrid-title'>Recent works</div>
               <WorksColumn length={4} />
               <div className='workgrid-btn'>
                  <MagneticBtn className={'change-color'}>
                     <Link to={'/work'}>More work</Link>
                  </MagneticBtn>
               </div>
            </div>
            <div className='workslider-container'>
               <WorkSlider index={0} direction={1} startIndex={0} endIndex={6} />
               <WorkSlider index={-1} direction={-1} startIndex={6} endIndex={13} />
            </div>
            <RoundedDiv />
         </div>
         <TransitionScreen />
      </>

   )
}

export default HomePage

const banner = {
   animate: {
      transition: {
         delayChildren: 0.2,
         staggerChildren: 0.1,
      }
   }
}

const letterAni = {
   initial: { top: 200 },
   animate: {
      top: 0,
      transition: {
         ease: "easeInOut",
         duretion: 1,
      }
   }
}

const Banner = () => {
   const [playMarquee, setPlayMarquee] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setPlayMarquee(true);
      }, 2000);
      return () => clearTimeout(timer)
   }, []);
   return (
      <AnimatePresence initial={true}>
         <div className="banner" key={'banner'}>
            <BannerImage src={`${process.env.PUBLIC_URL}/images/homepage/me.png`} />
            <BannerRowBottom />
            <BannerRowCenter title={"Nastassia Hardzeenka -"} playMarquee={playMarquee} />
         </div>
      </AnimatePresence>
   );
};

const AnimatedLetters = ({ title, disabled }) => {
   return (
      <motion.span
         className="row-title"
         variants={disabled ? null : banner}
         initial="initial"
         animate="animate">
         {[...title].map((letter, index) => (
            <motion.span
               key={index}
               className="row-letter"
               variants={disabled ? null : letterAni}
            >
               {letter}
            </motion.span>
         ))}
      </motion.span>
   )
};

const BannerImage = ({ src }) => {
   return (
      <div className='banner-image'>
         <div
         >
            <img
               src={src} alt="profile img"
            />
         </div>
      </div>
   )
}

const BannerRowBottom = () => {
   return (
      <div className={"banner-row around"}>
         <motion.div
            className="banner-col flex ibg"
            initial={{ scale: 0, x: '-100%' }}
            animate={{ scale: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
            style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/homepage/location.svg')` }}
         >
            <motion.span
               className='banner-col-location'
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
            >Located in<br />Poland</motion.span>
            <motion.span
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
            ><Globe /></motion.span>
         </motion.div>
         <motion.div
            className="banner-col"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeInOut" }}
         >
            <motion.span
               className='banner-col-title arrow'
               initial={{ y: 100, scale: 0 }}
               animate={{ y: 0, scale: 1 }}
               transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
            >
               <BsArrowDownRight />
            </motion.span>
            <motion.span
               className='banner-col-title'
               initial={{ y: 100, scale: 0 }}
               animate={{ y: 0, scale: 1 }}
               transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
            >
               Developer
            </motion.span>
            <motion.span
               className='banner-col-title'
               initial={{ y: 100, scale: 0 }}
               animate={{ y: 0, scale: 1 }}
               transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
            >
               & Designer
            </motion.span>
         </motion.div>
      </div>
   );
};

const BannerRowCenter = ({ title, playMarquee }) => {
   return (
      <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
         <div className="marquee__inner">
            <AnimatedLetters title={title} />
            <AnimatedLetters title={title} />
            <AnimatedLetters title={title} />
            <AnimatedLetters title={title} />
         </div>
      </div>
   );
};

const about = {
   animate: {
      transition: {
         delayChildren: 0.2,
         staggerChildren: 0.1,
      }
   }
}

const text = {
   initial: { y: 100 },
   animate: {
      y: 0,
      transition: {
         duration: 1,
         ease: "easeInOut"
      }
   }
}

const About = () => {
   const y = useMotionValue(0)
   const { scrollYProgress } = useScroll()

   useEffect(() => {
      function updateY() {
         const newY = transform(scrollYProgress.get(), [0, 0.4], [50, -50])
         y.set(newY)
      }

      const unsubscribeScroll = scrollYProgress.on("change", updateY)

      return () => unsubscribeScroll()
   }, []);

   return (
      <div className="homeabout-container container" >
         <div className='homeabout-inner'>
            <div className='homeabout-col'
            >
               <motion.div
                  className='homeabout-text-bg'
               >
                  <AnimatePresence initial={true}>
                     {('Hardworking student with a motivated attitude and a variety of powerful skills. Help you to glow up in the digital!').split(' ').map((word, index) =>
                        <motion.span
                           key={index}
                           className='homeabout-text-bg'
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: false }}
                           transition={{ duration: 0.3, delay: .1 * index / 2 }}
                           variants={{
                              visible: { opacity: 1 },
                              hidden: { opacity: 0 }
                           }}
                        >
                           {word + " "}
                        </motion.span>
                     )}
                  </AnimatePresence>
               </motion.div>
            </div>
            <motion.div className='homeabout-col'
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false }}
               transition={{ duration: 0.2 }}
               variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
               }}>
               <div className='homeabout-text'>
                  The combination of my passion for code, design & interaction positions me in the right place in the web development world.
               </div>
               <motion.div
                  initial={{ y: -100 }}
                  style={{ y }}
                  transition={{ type: 'spring' }}
               >
                  <MagneticBtn style={{ borderRadius: '50%', backgroundColor: 'var(--color-wine-dark)' }} className={'homeabout-btn'}>
                     <Link className='homeabout-btn__text' to={'/about'}>About me</Link>
                  </MagneticBtn>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}