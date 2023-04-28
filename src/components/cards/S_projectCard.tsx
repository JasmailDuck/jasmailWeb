import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion as m } from "framer-motion";

interface propTypes {
  type: string;
  title: string;
  img?: string;
}

const S_projectCard = (props: propTypes) => {
  return (
    <m.div
      whileHover={{ scale: 1.1, zIndex: 50 }}
      whileTap={{ scale: 0.9 }}
      className="  h-full w-[500px] flex-col flex  mr-4 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg drop-shadow-lg hover:cursor-pointer"
    >
      <img className=" rounded-t-md w-full h-full " src={props.img} alt="" />

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
    </m.div>
  );
};

export default S_projectCard;
