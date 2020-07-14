import React, { useState } from "react";

const Toast = (props: any) => {
  console.log(props);
  return (
    <div className={`alert alert-success alert-dismissible fade ${props.show}`}>
      <strong> {props.message} </strong>
      <button type="button" className="close" onClick={() => props.setShow("")}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Toast;
