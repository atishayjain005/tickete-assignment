import React, { useState, useEffect } from "react";

export default function SubNav({ mins }) {
  const [timer, setTimer] = useState({ minutes: mins, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer.seconds === 0) {
          return { minutes: prevTimer.minutes - 1, seconds: 59 };
        } else {
          return { ...prevTimer, seconds: prevTimer.seconds - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <h5 className="bg-black text-center text-white text-xs lg:text-sm p-2 lg:p-[10px]">
      Holding your tickets for&nbsp;
      {timer.minutes === 0
        ? setTimer((time) => {
            return (time.minutes = 30), (time.seconds = 0);
          })
        : timer.minutes}
      :{timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}
    </h5>
  );
}
