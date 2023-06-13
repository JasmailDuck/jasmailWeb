import ProjectViewCard from "../components/cards/ProjectViewCard";

const Project = () => {
  return (
    <div className="flex  justify-center  pt-16 overflow-y-auto">
      <div className=" w-full max-w-screen-lg flex flex-col   ">
        {/* Title Container */}
        <div className=" w-full ">
          <h1 className=" text-4xl text-white font-bold">Projects</h1>
          <h2 className=" text-neutral-400 "></h2>
        </div>
        {/* Seperator */}
        <div className=" border-b border-neutral-800 w-full my-16" />
        {/* Subject */}
        <div className="mb-5">
          <ul className=" list-disc ml-5 mb-2">
            <li className=" text-white">
              Summary.{" "}
              <span className=" text-neutral-400">
                View my personal projects and projects that I have contributed
                too.
              </span>
            </li>
          </ul>
        </div>
        <div className=" border-b border-neutral-800 w-full my-16" />

        <div className=" border border-neutral-800 w-full h-12 rounded-lg bg-neutral-800/40 flex items-center px-2 py-1 gap-2 mb-2">
          <h1 className=" text-neutral-400 text-xs">Sort By</h1>
          <button className=" border py-1 px-2 rounded-md border-neutral-800 text-xs text-neutral-400 bg-neutral-800">
            Personal
          </button>
          <button className=" border py-1 px-2 rounded-md border-neutral-800 text-xs text-neutral-400 ">
            Contributions
          </button>
          <div className=" h-full border-r border-neutral-800" />
          <button className=" border py-1 px-2 rounded-md border-neutral-800 text-xs text-neutral-400 bg-neutral-800">
            Alphabetical
          </button>
          <button className=" border py-1 px-2 rounded-md border-neutral-800 text-xs text-neutral-400 ">
            Date
          </button>
          <button className=" border py-1 px-2 rounded-md border-neutral-800 text-xs text-neutral-400 ">
            Last Modified
          </button>
          <button className=" border py-1 px-2 rounded-md border-neutral-800 text-xs text-neutral-400 ">
            Top Rated
          </button>
          <div className=" h-full border-r border-neutral-800" />
        </div>

        <div className=" flex flex-col gap-1">
          <ProjectViewCard />
          <ProjectViewCard />
          <ProjectViewCard />
          <ProjectViewCard />
          <ProjectViewCard />
        </div>

        <div className=" border-b border-neutral-800 w-full my-16" />
      </div>
    </div>
  );
};

export default Project;
