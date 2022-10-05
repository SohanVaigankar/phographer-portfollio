import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// reusable functional component to autoscroll the website to top ehenever new path is hit

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
