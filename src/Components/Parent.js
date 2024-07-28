import React, { useState, useMemo } from "react";
import Child from "./Child";

const Parent = () => {
  const [value, setValue] = useState(0);
  const handleOnClick = (e) => {
    setValue(value + 1);
  };

  const halfValue = Math.round(value / 2);
  const myObject = useMemo(() => {
    console.log("----------------------------->")
    console.log("callback of usememo executed");
    console.log("full (value) is", value);
    console.log(`half is ${value / 2}`, halfValue);

    return { halfValue: halfValue };
  }, [halfValue]);

  return (
    <div>
      <h1>I am a parent</h1>
      <button onClick={handleOnClick}>Click on Me</button>
      <Child object={myObject} />
    </div>
  );
};

export default Parent;
