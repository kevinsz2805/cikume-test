import React from "react";
import { codemirror } from "./style";

const Solution1 = () => {
  return (
    <div className="container">
      <div className="col-lg-12">
        <br />
      </div>
      <div className="col-lg-12">
        <p>1)Having the code below, what should be changed in order to get the greeting Hello World properly?</p>
      </div>
      <div className="row text-center text-lg-left">
        <div className="col-lg-3 col-md-4 col-6"></div>
        <div className="col-lg-6 col-md-4 col-6">
          <img className="img-fluid img-thumbnail" src={process.env.PUBLIC_URL + "/images/question1.png"} alt="" />
        </div>
      </div>
      <div className="col-lg-12">
        <h3>Solution</h3>
        <br />
      </div>

      <div className="row">
        <div className="col-md-3">
          <p>For me the solution for this is:</p>
          <br />
        </div>
        <div className="col-md-9" style={codemirror.divContainer}>
            <pre>
            <code>
            <span style={codemirror.spanGray}>&lt;</span>
            <span style={codemirror.spanBlue}>script</span>
            <span style={codemirror.spanSkyBlue}> type=</span>
            <span style={codemirror.spanOrange}>"text/babel"</span>
            <span style={codemirror.spanGray}>&gt;</span>
            <br />
            <span style={codemirror.spanBlue}>function</span> <span style={codemirror.spanYellow}>Greeter</span> 
            <span style={codemirror.spanGray}>(</span><span style={codemirror.spanSkyBlue}>props</span><span style={codemirror.spanGray}>)</span> <span style={codemirror.spanGray}>&#123;</span>
            <br /><span style={codemirror.spanPink}>        return </span> <span style={codemirror.spanGray}>&lt;</span><span style={codemirror.spanBlue}>div</span><span style={codemirror.spanGray}>&gt; </span> 
            <span style={codemirror.spanGray}>Hello</span> <span style={codemirror.spanBlue}>&#123;</span> <span style={codemirror.spanSkyBlue}>props.message</span> <span style={codemirror.spanBlue}>&#125; </span>
            <span style={codemirror.spanGray}>&lt;/</span><span style={codemirror.spanBlue}>div</span><span style={codemirror.spanGray}>&gt;;</span>
            <br /><span style={codemirror.spanGray}>    &#125; </span>
            <br/><br/>
            <span style={codemirror.spanBlue}>class</span> <span style={codemirror.spanGreen}>App</span> <span style={codemirror.spanBlue}>extends</span> <span style={codemirror.spanGreen}>React.Component </span><span style={codemirror.spanGray}>&#123;</span>
            <br/><span style={codemirror.spanYellow}>   render</span><span style={codemirror.spanGray}>()</span> <span style={codemirror.spanGray}>&#123;</span>
            <br />
            <span style={codemirror.spanPink}>          return</span> <span style={codemirror.spanGray}>&lt;</span><span style={codemirror.spanGreen}>Greeter</span> <span style={codemirror.spanSkyBlue}>message=</span><span style={codemirror.spanOrange}>"World"</span> <span style={codemirror.spanGray}>/&gt;;</span> 
            <br /><span style={codemirror.spanGray}>    &#125; </span>
            <br /><span style={codemirror.spanGray}>  &#125; </span>
            <br /><br />
            <span style={codemirror.spanBlue}>const</span> <span style={codemirror.spanSkyBlue}>rootElement</span> <span style={codemirror.spanGray}>=</span> <span style={codemirror.spanSkyBlue}>document.</span><span style={codemirror.spanYellow}>getElementById</span><span style={codemirror.spanGray}>(</span><span style={codemirror.spanOrange}>"root"</span><span style={codemirror.spanGray}>);</span>
            <br /><span style={codemirror.spanSkyBlue}>ReactDOM.</span>
            <span style={codemirror.spanYellow}>render</span>
            <span style={codemirror.spanGray}>(&lt;</span>
            <span style={codemirror.spanGreen}>App </span>
            <span style={codemirror.spanGray}>/&gt;</span><span style={codemirror.spanGray}>,</span> <span style={codemirror.spanSkyBlue}>rootElement</span><span style={codemirror.spanGray}>);</span>
            <br/>
            <span style={codemirror.spanGray}>&lt;/</span>
            <span style={codemirror.spanBlue}>script</span>
            <span style={codemirror.spanGray}>&gt;</span>
            <br />
            <span style={codemirror.spanGray}>&lt;</span>
            <span style={codemirror.spanBlue}>div</span>
            <span style={codemirror.spanSkyBlue}> id=</span>
            <span style={codemirror.spanOrange}>"root"</span>
            <span style={codemirror.spanGray}>&gt;</span>
            <span style={codemirror.spanGray}>&lt;</span>
            <span style={codemirror.spanBlue}>/div</span>
            <span style={codemirror.spanGray}>&gt;</span>
            </code>
            </pre>
        </div>
      </div>
    </div>
  );
};

export default Solution1;



 
