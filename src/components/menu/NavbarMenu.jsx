import React from 'react'
import MagneticLink from '../UI/magnetic/MagneticLink'
import { menu } from '../../data/menu'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {

   return (
      <ul className='links-wrap'>
         {menu.map(link =>
            <li key={link.href}>
               <MagneticLink title={link.title} className={`magnetic-link`} distanceTrigger={0.4}>
                  <Link to={link.href}>{link.title}</Link>
               </MagneticLink>
            </li>
         )}
         <li >
            <MagneticLink title={'Contact'} className={`magnetic-link`} distanceTrigger={0.4}>
               <a href='#contact'>Contact</a>
            </MagneticLink>
         </li>
      </ul>
   )
}
export default NavbarMenu



