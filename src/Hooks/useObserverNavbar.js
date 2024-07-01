import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";

const useObserverNavbar = (navbarHeight = 70) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const triggerRef = useRef(null);

  useEffect(() => {
    const trigger = triggerRef.current;

    if (!trigger) {
      // Return if triggerRef is not initialized
      return;
    }

    const options = {
      root: null, // Use the viewport as the root
      threshold: 1.0, // Fully intersecting
    };

    const handleIntersect = entries => {
      entries.forEach(entry => {
        setIsIntersecting(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(trigger);

    return () => {
      observer.unobserve(trigger);
    };
  }, []);

  const IntersectionTrigger = (
    <Box
      ref={triggerRef}
      className='flexRow'
      sx={{
        position: "absolute",
        // top: navbarHeight,
        // top: -navbarHeight,
        top: navbarHeight * 0.5,
        left: 0,
        right: 0,
        zIndex: -200,
        // background: "teal",
        height: "1px",
      }}
    />
  );
  // Return both isIntersecting and the JSX for the trigger box
  return [isIntersecting, IntersectionTrigger];
};

export default useObserverNavbar;
