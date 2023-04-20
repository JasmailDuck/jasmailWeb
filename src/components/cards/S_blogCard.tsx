import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface propTypes {
  date: string;
  title: string;
}

const S_blogCard = (props: propTypes) => {
  return (
    <div className=" h-64 flex flex-col justify-center">
      <h1 className=" text-neutral-500 mb-5 ">{props.date}</h1>
      <h1 className=" text-4xl font-bold text-white mb-5">{props.title}</h1>
      <div className=" text-xl text-white flex items-center hover:cursor-not-allowed">
        <h1>Read the article</h1>
        <ArrowRightIcon className="ml-3 w-5" />
      </div>
    </div>
  );
};

export default S_blogCard;
