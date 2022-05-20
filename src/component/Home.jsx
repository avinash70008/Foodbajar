import React from "react";

import { Products } from "./Products";

export const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zlj7_mb34Op_aY4M7VV_0ALR81nlEBDtAQ&usqp=CAU" className="card-img" alt="Background" height="450px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0"></h5>
          <p className="card-text lead fs-2">
            
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};


