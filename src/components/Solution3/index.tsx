import React from "react";
import "./style.css";

const HelloWorld = () => {
  return (
    <div>
      <div className="col-lg-12">
        <br />
      </div>

      <div className="card">
        <div className="card-header">
          This is a Css Example if the screen changes size the div with "Hello World change size and color
        </div>
        <div className="card-body">
          <h5 className="card-title">First an example with a div inside a "card" class from Bootstrap</h5>
          <div className="divHello">
            <div>Hello World</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
