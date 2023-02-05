import React from 'react'
import HomePage from '../pages/HomePage.jsx'
import WorksPage from '../pages/WorksPage'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import ProjectPage from '../pages/ProjectPage'
import { Routes, Route, Navigate, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './ScrollToTop'

const AppRoutes = () => {
   const location = useLocation();
   return (
      <AnimatePresence initial={false}>
         {/* <ScrollToTop> */}
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work/:id" element={<ProjectPage />} />
            <Route path="*" element={< Navigate to="/" />} />
         </Routes>
         {/* </ScrollToTop> */}
      </AnimatePresence>
   )
}

export default AppRoutes