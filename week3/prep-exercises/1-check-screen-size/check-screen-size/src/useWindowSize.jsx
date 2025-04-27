import { useEffect, useState, useDebugValue } from "react";

export default function useWindowDimension() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let label = "SMALL";
  if (size.width > 1000) {
    label = "BIG";
  } else if (size.width > 600) {
    label = "MEDIUM";
  }
  useDebugValue(label);

  return size;
}
