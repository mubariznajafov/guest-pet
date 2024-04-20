import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MaybeShowFooter = ({ children }) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    console.log("this is location", location);
    if (
      location.pathname === "/add-name" ||
      location.pathname === "/add-email" ||
      location.pathname === "/add-photo" ||
      location.pathname === "/add-password"
    ) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return <div>{showFooter && children}</div>;
};

export default MaybeShowFooter;
