import Navbar from "./components/Navbar";
import Loader from "./components/UI/transitions/Loader";
import { useLayoutEffect, useEffect, useState, useRef } from "react";
import Footer from "./pages/Footer";
import AppRoutes from "./components/AppRoutes";
import { useLocation } from "react-router";

function App() {
  const { pathname } = useLocation()
  const [isLoading, setIsLoading] = useState(pathname === "/" ? true : false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page">
      <Loader />
      {!isLoading || pathname !== "/" ?
        <>
          <Navbar />
          <AppRoutes />
          <Footer />
        </>
        :
        <></>
      }
    </div>
  );
}

export default App;
