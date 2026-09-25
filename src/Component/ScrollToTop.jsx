import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // overrides CSS smooth scroll: new routes open at the top immediately
    });
  }, [pathname, hash]);

  return null;
}
