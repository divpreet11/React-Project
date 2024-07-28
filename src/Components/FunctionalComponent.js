import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardComponent from "./ListComponent";
import DataNotFound from "./DataNotFound";
const FunctionalComponent = () => {
  const [data, setData] = useState([]);

  const getdata = () => {
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.products);
        // if(data.length!==json.products.length)
        setData(json.products);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="heading">
      <Link to="/class">Click to open class components</Link>
      <h1>Functional Components</h1>
      <button onClick={getdata}>Fetch Data</button>
      <div className="wrapper">
        {data.length > 0 ? <CardComponent items={data} /> : <DataNotFound />}
      </div>
    </div>
  );
};

export default FunctionalComponent;
