import { useLocation } from "react-router-dom";

const useCurrentRouteKey = routes => {
  const location = useLocation();

  // Find the key in routes that matches the current location.pathname
  const currentRoute = Object.keys(routes).find(
    key => routes[key].path === location.pathname
  );

  return currentRoute || "";
};

export default useCurrentRouteKey;
