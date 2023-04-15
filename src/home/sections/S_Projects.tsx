import { ArrowRightIcon } from "@heroicons/react/24/solid";
import S_projectCard from "../../componets/cards/S_projectCard";

const S_Projects = () => {
  return (
    <section
      id="S_ProjectWrapper"
      className=" flex justify-center overflow-x-hidden"
    >
      <div
        id="S_Project"
        className=" max-w-screen-xl w-full  h-screen flex flex-col px-5 "
      >
        <div className=" mb-20">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5">
            PROJECTS
          </h1>
          <div className="flex  ">
            <div className="flex-1 ">
              <h1 className="text-6xl w-2/3 font-black ">
                Some two liner text that should go here
              </h1>
            </div>

            <div className=" relative w-52">
              <div className="h-14 w-40 bg-gradient-to-r from-cyan-400 to-green-400 absolute top-2 left-2 rounded-md"></div>
              <button className=" bg-black absolute h-14 w-40 text-white rounded-md text-lg">
                View all projects
              </button>
            </div>
          </div>
        </div>

        <div className=" relative border h-[450px] ">
          <div className=" absolute h-full flex  ">
            <S_projectCard title="Data Mining and Warehouse" type="Database" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default S_Projects;
