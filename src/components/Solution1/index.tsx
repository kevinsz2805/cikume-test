import React from "react";
import { codemirror } from "./style";
import Span from "../Span";
import { spanText } from "./text-span";

const Solution1 = () => {
  return (
    <div className="container">
      <div className="col-lg-12">
        <br />
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">Question 1</div>
            <div className="card-body">
              <h5 className="card-title">
                1)Having the code below, what should be changed in order to get the greeting Hello World properly?
              </h5>
              <div className="row text-center text-lg-left">
                <div className="col-lg-3 col-md-4 col-6"></div>
                <div className="col-lg-6 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src={process.env.PUBLIC_URL + "/images/question1.png"}
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <br />
                </div>
                <div className="col-md-3">
                  <p>For me the solution for this is:</p>
                  <br />
                </div>
                <div className="col-md-6" style={codemirror.divContainer}>
                  <pre>
                    <code>
                      {spanText.map((element) => {
                        return (
                          <code>
                            <Span style={element.style} text={element.text} />
                          </code>
                        );
                      })}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution1;
