import { useEffect, useState } from 'react'


export const useMousePosition = () => {
   const [mousePosition, setMousePosition] = useState({ x: null, y: null });
   useEffect(() => {
      function handlePosition(e) {
         setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('mousemove', handlePosition)
      return () => { window.removeEventListener('mousemove', handlePosition); }
   }, [])
   return mousePosition
}

// export const useMousePositionPage = () => {
//    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
//    useEffect(() => {
//       function handlePosition(e) {
//          setMousePosition({ x: e.pageX, y: e.pageY })
//       }
//       window.addEventListener('mousemove', handlePosition)
//       return () => { window.removeEventListener('mousemove', handlePosition); }
//    }, [])
//    return mousePosition
// }