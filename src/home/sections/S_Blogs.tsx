import { ArrowRightIcon } from "@heroicons/react/24/solid";
import S_blogCard from "../../componets/cards/S_blogCard";

const S_Blogs = () => {
  return (
    <section
      id="S_BlogWrapper"
      className=" flex flex-col items-center bg-black"
    >
      <div className="relative w-full">
        <div className=" absolute w-full h-72 bg-black -top-72" />
      </div>

      <div id="S_Blog" className=" max-w-screen-xl w-full flex  px-5 ">
        <div className=" flex-1">
          <div className="sticky top-0 pt-5">
            <h1 className="text-3xl font-bold w-24 text-transparent bg-clip-text  bg-gradient-to-r from-cyan-400 to-green-400 tracking-widest mb-5">
              {" "}
              BLOG{" "}
            </h1>
            <h1 className="text-6xl font-black text-white mb-5 ">
              Comming Soon
            </h1>
            <div className=" text-xl text-white flex items-center hover:cursor-not-allowed  ">
              <h1>View All</h1>
              <ArrowRightIcon className="ml-3 w-5" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <S_blogCard
            title=" How to create a basic hover effect using framer motion"
            date="April 6, 2023 | 10 min"
          />
          <div className="border-b border-neutral-600" />
          <S_blogCard
            title=" How to create a basic hover effect using framer motion"
            date="April 6, 2023 | 10 min"
          />
          <div className="border-b border-neutral-600" />
          <S_blogCard
            title=" How to create a basic hover effect using framer motion"
            date="April 6, 2023 | 10 min"
          />
          <div className="border-b border-neutral-600" />
          <S_blogCard
            title=" How to create a basic hover effect using framer motion"
            date="April 6, 2023 | 10 min"
          />
          <div className="border-b border-neutral-600" />
          <S_blogCard
            title=" How to create a basic hover effect using framer motion"
            date="April 6, 2023 | 10 min"
          />
        </div>
      </div>
    </section>
  );
};

export default S_Blogs;
