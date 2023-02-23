import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const Count = ({ end = 200 }) => {
  // const [value, setValue] = useState(null)
  // const ref = useRef(0)

  // const updateCounterState = () => {
  //   if(ref.current < end) {
  //     const result = Math.ceil(ref.current + (end / 200));
  //     if(result > end) return setValue(end);
  //     setValue(result);
  //     ref.current = result;
  //   }
  //   setTimeout(updateCounterState, 50)
  // }

  // useEffect(() => {
  //   let isMounted = true;
  //   if(isMounted){
  //     updateCounterState();
  //   }

  //   return () => {
  //     isMounted = false
  //   }
  // }, [end])

  const counts = [
    { value: "XP Years", count: 2 },
    { value: "Projects", count: 25 },
    { value: "Clients", count: 12 },
    { value: "Amazing ideas", count: 1000 },
  ];

  return (
    <div className="flex max-md:flex-wrap gap-24 max-md:gap-20 text-center justify-center py-9 bg-white">
      {counts.map((item) => (
        <div key={item.value}>
          <CountUp
            end={item.count}
            duration={5}
            className={"text-3xl font-dancing"}
          />
          <p className="mt-4">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Count;
