import React from 'react';
import img from "../images/notfound.png"
const DataNotFound = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  };



  return (
    <div style={containerStyle}>
      <h2>Data Not Found</h2>
      <img
        src={img}
        alt="Data Not Found"
      
      />
    </div>
  );
};

export default DataNotFound;
