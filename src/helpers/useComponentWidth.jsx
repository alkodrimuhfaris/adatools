
import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function useComponentWidth() {
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const { width, height } = useWindowDimensions();
  const ref = React.useRef(null);

  useEffect(() => {
    setW(() => (ref.current ? ref.current.offsetWidth : 0));
    setH(() => (ref.current ? ref.current.offsetHeight : 0));
  }, [width, height, ref.current]);

  return [ref, w, h];
}
