import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

interface Counter {
  value: number;
  incrementBy: number;
  max: number;
}

export const useCount = () => {
  const tl = gsap.timeline();

  const ref = useRef(null);

  const [count, setCount] = useState<Counter>({
    value: 0,
    incrementBy: 5,
    max: 20,
  });

  useEffect(() => {
    if (count.value >= count.max) {
      tl.to(ref.current, {
        duration: 0.1,
        scale: 1.2,
        repeat: 1,
        yoyo: true,
      });
      setTimeout(() => {
        setCount({ value: 0, incrementBy: 5, max: 20 });
      }, 1000);
    }
  }, [count, tl]);

  const handleClick = () => {
    tl.to(ref.current, { duration: 0.1, yoyo: true, scale: 1.2, repeat: 1 });
    setCount((prevCount) => {
      return {
        ...prevCount,
        value: Math.min(prevCount.value + prevCount.incrementBy, prevCount.max),
      };
    });
  };

  return {
    count,
    setCount,
    ref,
    handleClick,
  };
};
