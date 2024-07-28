import React from "react";

const Child = ({ object }) => {
  return (
    <div>
      <h1>I am a child</h1>
      {console.log("THE CHILD IS RENDERING!")}
      <p>Object is {JSON.stringify(object)}</p>
    </div>
  );
};

export default React.memo(Child);
