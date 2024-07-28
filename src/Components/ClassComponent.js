import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    // this.getdata = this.getdata.bind(this); // to bind the this of function with the this of class
  }
  getdata() {
    console.log("this here points to ", this);
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          data: [...json.products],
        });
      });
  }
  componentDidMount() {
    this.getdata();
    console.log("called when Components mounts");
  }
  shouldComponentUpdate() {
    console.log("called to check whether the component updates or not");
    return true; // must return boolean
  }
  componentDidUpdate() {
    console.log("called when component Updates");
  }
  componentWillUnmount() {
    console.log("called when component Unmounts");
  }

  render() {
    return (
      <>
        <div className="heading">
          <Link to="/function">Click to open functional components</Link>
          <h1>Class based Components</h1>
        </div>
        <div className="wrapper">
          {this.state.data.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Discount: {product.discountPercentage}%</p>
                <p>Rating: {product.rating}</p>
                <p>Stock: {product.stock}</p>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
              </div>
              <div className="thumbnails">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product.title}
                    className="thumbnail"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
