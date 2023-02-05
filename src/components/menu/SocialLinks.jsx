import { socialLinks } from "../../data/menu"
import MagneticLink from '../UI/magnetic/MagneticLink'
import { Link } from "react-router-dom"

const SocialLinks = () => {
   return (
      <ul className='socials-wrap'>
         {socialLinks.map(link =>
            <li key={link.title}>
               <MagneticLink title={link.title} className={`magnetic-link social`} distanceTrigger={0.4}>
                  <a target='_blank' href={link.href}>{link.title}</a>
               </MagneticLink>
            </li>
         )}
      </ul>
   )
}

export default SocialLinks