import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1) + "!!";
  }
  return (

    <div style={{height: '50px'}}>
      {/* "props.alert &&" is same as saying if it(value before "&&") is a falsy value then dont evaluate/execute the code after "&&" */}
      {props.alert && 
        <div
          className={`alert alert-${props.alert.type}  alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>&emsp;&nbsp;{props.alert.msg}
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
        </div>
      }
    </div>
  );
}

export default Alert;
