import React, { useState } from "react";

export default function ListMap() {
  const [List1, setList1] = useState([
    "january",
    "feburay",
    "march",
    "april",
    "may",
    "june",
  ]);
  const [List2, setList2] = useState([
    "july",
    "august",
    "september",
    "october",
    "november",
    "December",
  ]);
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="btn">
        <button onClick={() => setToggle(!toggle)}>Click me</button>
      </div>

      <ol>
        {toggle
          ? List1.map((item, id) => <li key={id}>{item}</li>)
          : List2.map((item, id) => <li key={id}>{item}</li>)}
      </ol>
    </>
  );
}
