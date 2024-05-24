import React from "react";

export default function ApiPlaceHolder(props: {
  name: string;
  imgURL: string;
}) {
  return (
    <div>
      <h3>
        {props.name}
      </h3>
      <img src={props.imgURL} alt="" />
    </div>
  );
}
