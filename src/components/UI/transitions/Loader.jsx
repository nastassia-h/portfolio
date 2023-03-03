import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Loader = () => {
   const comp = useRef();
   const tl = useRef();
   let grid = [9, 9]

   function leaveLoad() {
      gsap.to(".loader-overlay", {
         autoAlpha: 0
      }).delay(0.5)
   }

   function leaveScreen() {
      gsap.to(".loader", {
         top: "-110%",
         ease: "Power2.easeInOut",
      })
      //document.body.classList.remove('lock')
   }

   useLayoutEffect(() => {
      document.body.classList.add('lock')
      let ctx = gsap.context(() => {
         tl.current = gsap.timeline()
            .from(".grid .flex-col", {
               duration: .75,
               scale: 0.001,
               rotate: 8,
               yPercent: 40,
               ease: "Power1.easeInOut",
               delay: .5,
               stagger: {
                  amount: 2,
                  grid: grid,
                  axis: null,
                  ease: "power1.InOut",
                  from: "start",
                  yoyo: true,
                  repeat: 5,
               },
               onStart: leaveLoad,
               onComplete: leaveScreen,
            }
            )
      }, comp)
      return () => ctx.revert();
   }, [])

   return (
      <div ref={comp}>
         <div className="loader">
            <div className="loader-container">
               <div className="loader-overlay"></div>
               <div className="grid">
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>N</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>T</span></div>
                  <div className="flex-col"><span>A</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>S</span></div>
                  <div className="flex-col"><span>I</span></div>
                  <div className="flex-col"><span>A</span></div>
               </div>
            </div>
            <div className='loader-bottom'></div>
         </div>
      </div>
   );
}

export default Loader