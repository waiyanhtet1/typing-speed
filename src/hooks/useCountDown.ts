import { useCallback, useRef, useState } from "react";

const useCountDown = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startCountDown = useCallback(() => {
    console.log("starting countdown");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetCountDown = useCallback(() => {
    console.log("resetting countdown");

    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeLeft(seconds);
  }, [seconds]);

  return { timeLeft, startCountDown, resetCountDown };
};

export default useCountDown;