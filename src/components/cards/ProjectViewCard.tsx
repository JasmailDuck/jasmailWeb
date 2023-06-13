import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import AttributeTextWithBorder from "../text/AttributeTextWithBorder";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const ProjectViewCard = () => {
  return (
    <div className=" border border-neutral-700 h-64 bg-neutral-800/40 rounded-lg flex flex-col p-3">
      <div className=" flex  mb-2">
        <div className=" flex gap-2 flex-1">
          <AttributeTextWithBorder title="Data" />
          <AttributeTextWithBorder title="Full-Stack" />
        </div>

        <div className=" flex gap-2">
          <h1 className=" text-neutral-500">More Info </h1>
          <ArrowDownCircleIcon className=" w-5 text-neutral-500" />
        </div>
      </div>

      <h1 className="text-white mb-2">
        Movie Browser{" "}
        <span className=" text-neutral-400">
          | A simple, yet intuitive movie browsing site.
        </span>
      </h1>

      <div className="flex flex-1 items-center gap-2  ">
        <img
          //src={Web3ThumbnailPic}
          alt=""
          className=" w-1/3 h-40 rounded-lg object-cover "
        />
        <img
          //src={Web3ThumbnailPic2}
          alt=""
          className=" w-1/3 h-40 rounded-lg object-cover "
        />
        <img
          //src={Web3ThumbnailPic3}
          alt=""
          className=" w-1/3 h-40 rounded-lg object-cover "
        />
      </div>
    </div>
  );
};

export default ProjectViewCard;
