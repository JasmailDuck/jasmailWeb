import React from "react";

interface propTypes {
  title: string;
}
const AttributeTextWithBorder = (props: propTypes) => {
  return (
    <h1 className=" border border-neutral-700 rounded-md text-sm text-neutral-600 px-1 border-width-[1px] ">
      {props.title}
    </h1>
  );
};

export default AttributeTextWithBorder;
