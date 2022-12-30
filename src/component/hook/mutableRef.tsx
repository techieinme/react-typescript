import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  // const intervalRef = useRef<number | undefined>(0);
  const intervalRef = useRef<number | null>(0);
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      hook timer - {timer}
      <button onClick={() => stopTimer()}>Stop</button>
    </div>
  );
};
