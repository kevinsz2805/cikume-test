import React from "react";
import "./style.css";

const Solution4 = () => {
  return (
    <div className="container">
      <div className="col-lg-12">
        <br />
      </div>

      <div className="card">
        <div className="card-header">Semantic and non-Semantic CSS</div>
        <div className="card-body">
          <h5 className="card-title">
            
          </h5>
          <div className="card-text">
          The difference between this two is that Semantic elements are easy to understand for us, when we are
            writting a Html Page we can have different ways to put code for example a "div" our div can have a class
            like class="col-lg-12" for a lot of devs we know what is that class but for other devs it's a little more
            complicated and that class is an example of "non-semantic" elements, those type of elements give us a
            minimun of information about what type of element is or in other words what is the exact style for that
            element, ergo is not a good way to write code with non-semantic css for specific elements. So, to understand
            in a better way this difference this are some examples:
          </div>
          <br />

<div className="row">
          <div className="col-lg-6">
            <pre>
              <code>
                &lt;!-- non semantic --&gt; <br/><br/>
                &lt;div class="red pull-left pb3"&gt; <br/>
                &lt;div class="grid row"&gt; <br/>
                &lt;div class="col-xs-4"&gt;
              </code>
            </pre>
          </div>
          <div className="col-lg-6">
            <pre>
              <code>
                &lt;!-- semantic --&gt; <br/><br/> 
                &lt;div class="basket"&gt; <br/>
                &lt;div class="product"&gt; <br/>
                &lt;div class="searchResults"&gt;
              </code>
            </pre>
          </div>
          <div className="col-lg-6">
            Here we can see how the elements have a non-semantic CSS and the name of the class is complicated to understand
          </div>
          <div className="col-lg-6">
            Otherwise we have elements with a Semantic Css and is easy to understand what the elements do in the html 
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution4;
