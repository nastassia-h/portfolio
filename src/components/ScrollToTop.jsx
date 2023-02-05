import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
   const location = useLocation();
   useEffect(() => {
      const timer = setTimeout(() => {
         window.scrollTo(0, 0);
      }, 1800)
      return () => clearTimeout(timer)
   }, [location]);

   return <>{props.children}</>
};

export default ScrollToTop;