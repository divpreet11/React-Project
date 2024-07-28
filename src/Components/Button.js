import React from "react";
import { Link } from "react-router-dom";

export default function Button({ count, setCount }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Counter</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment +</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement -</button>
      <Link to="/function">Click to open functional components</Link>
    </div>
  );
}
