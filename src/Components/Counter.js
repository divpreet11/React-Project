import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
export default function Counter() {
  const [count, setCount] = useState(0);

  // useEffect 1 works like componentdidmount() and componentDidUpdate()
  useEffect(() => {
    // useEffect 1
    console.log(
      "🐧 useEffect 1 called when component mounts or when component rerenders"
    );
  });

  // useEffect 2  works like componentdidmount() and componentwillunmount()
  useEffect(() => {
    console.log(" 🐔 useEffect 2 called when component mounts only");
    return () => {
      // also called clean up code
      console.log(" 🐔 useEffect 2 called when component unmounts");
    };
  }, []);

  // useEffect 3 works like componentdidupdate
  useEffect(() => {
    console.log(" 👻 useEffect 3 called only when state updates");
  }, [count]);

  return (
    <>
      <Button count={count} setCount={setCount} />
    </>
  );
}
