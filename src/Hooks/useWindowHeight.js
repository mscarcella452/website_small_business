import { useEffect } from "react";
import debounce from "lodash/debounce";

export const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const heightResize = () => {
      const windowH = window.innerHeight;
      setWindowHeight(windowH);
    };

    const handleDebounceResize = debounce(heightResize, 300);
    heightResize();

    window.addEventListener("resize", handleDebounceResize);

    return () => window.removeEventListener("resize", handleDebounceResize);
  }, []);

  return windowHeight;
};
