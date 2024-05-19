import React from "react";

export default function ApiPlaceHolder(props: {
  fName: string;
  lName: string;
  imgURL: string;
}) {
  return (
    <div>
      <h3>
        {props.fName} {props.lName}
      </h3>
      <img src={props.imgURL} alt="" />
    </div>
  );
}
