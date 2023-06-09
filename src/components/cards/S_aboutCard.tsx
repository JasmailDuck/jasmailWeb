import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface propTypes {
  title: string;
  desc: string;
  desc2?: string;
  duration: string;
}
const S_aboutCard = (props: propTypes) => {
  return (
    <div className="flex lg:flex-row flex-col lg:h-32 py-5">
      <div className=" flex-1 lg:self-center">
        <h1 className=" text-2xl text-white">{props.title}</h1>
        <h2 className=" text-neutral-500">{props.desc}</h2>
        <h2 className=" text-neutral-500">{props.desc2}</h2>
      </div>

      <div className=" flex flex-col lg:self-center">
        <h1 className=" text-neutral-500">{props.duration}</h1>
      </div>
      <div className=" lg:w-1/5 flex justify-end lg:tems-start">
        <ArrowTopRightOnSquareIcon className=" w-5 text-neutral-500" />
      </div>
    </div>
  );
};

export default S_aboutCard;
