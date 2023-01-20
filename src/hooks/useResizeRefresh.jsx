import {useEffect, useState} from 'react';


export const useResizeRefresh = (method) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
      method();
    }, [windowWidth]);
  }