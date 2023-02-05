import { sidebar } from "../../data/menu"
import MagneticLink from '../UI/magnetic/MagneticLink'
import { motion } from "framer-motion"
import { fadeIn } from '../../utils/motion.js'
import { Link } from "react-router-dom"

const SidebarMenu = ({ visible, setVisible }) => {
   return (
      <motion.ul
         className='links-wrap-sidebar'
      >
         {sidebar.map((link, index) =>
            <motion.li
               key={link.href}
               variants={fadeIn('left', 'spring', index * 0.15 + 0.1, 3)}
               initial='hidden'
               animate={visible ? 'show' : 'hidden'}
               transition={{
                  type: 'spring',
                  delay: index * 0.15,
                  duration: 1,
                  ease: 'easeOut',
               }}
            >
               <MagneticLink title={link.title} className={`magnetic-link sidebar`} distanceTrigger={0.4}>
                  <Link onClick={() => { setVisible(false); document.body.classList.remove('lock') }} to={link.href}>{link.title}</Link>
               </MagneticLink>
            </motion.li>
         )}
         <motion.li
            variants={fadeIn('left', 'spring', .55, 3)}
            initial='hidden'
            animate={visible ? 'show' : 'hidden'}
            transition={{
               type: 'spring',
               delay: .55,
               duration: 1,
               ease: 'easeOut',
            }}
         >
            <MagneticLink title='Contact' className={`magnetic-link sidebar`} distanceTrigger={0.4}>
               <a onClick={() => setVisible(false)} href='#contact'>Contact</a>
            </MagneticLink>
         </motion.li>
      </motion.ul>

   )
}

export default SidebarMenu