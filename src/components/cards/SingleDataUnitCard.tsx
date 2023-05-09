import React from "react";

interface propTypes {
  data: number;
  dataTitle: string;
}

const SingleDataUnitCard = (props: propTypes) => {
  return (
    <div
      className={
        " border border-neutral-700 bg-cyan-800/10 from-neutral-800/50  h-36 w-44  rounded-lg flex flex-col justify-center items-center "
      }
    >
      <h1 className=" text-white text-3xl">{props.data}</h1>
      <h2 className=" text-sm text-neutral-400 text-center">
        {props.dataTitle}
      </h2>
    </div>
  );
};

export default SingleDataUnitCard;
