import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface propTypes {
  type: string;
  title: string;
  img?: string;
}

const S_projectCard = (props: propTypes) => {
  return (
    <div className="  h-full w-[500px] flex-col flex  mr-4 bg-black border-2 border-black rounded-lg ">
      <div className="flex-1 rounded-lg">
        <img className=" rounded-t-md w-full h-full" src={props.img} alt="" />
      </div>

      <div className=" h-40 flex flex-col p-5 bg-white rounded-b-md">
        <h1 className=" flex-1 text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 tracking-widest w-32">
          {props.type}
        </h1>
        <h1 className=" flex-1 text-2xl font-bold">{props.title}</h1>
        <div className="text-xl flex flex-1 items-center   ">
          <h1>View Project</h1>
          <ArrowRightIcon className="ml-3 w-5" />
        </div>
      </div>
    </div>
  );
};

export default S_projectCard;
