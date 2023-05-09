import SingleDataUnitCard from "../../components/cards/SingleDataUnitCard";

const Home = () => {
  return (
    <div className="flex-1 flex justify-center pt-16 overflow-y-auto">
      <div className=" w-full h-full max-w-screen-lg flex flex-col  ">
        {/* Title Container */}
        <div className=" w-full ">
          <h1 className=" text-4xl text-white font-bold">
            Fullstack Developer & Data Analyst
          </h1>
          <h2 className=" text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut!
          </h2>
        </div>

        {/* Seperator */}
        <div className=" border-b border-neutral-800 w-full my-16" />

        {/* Subject */}
        <div className="mb-5">
          <ul className=" list-disc ml-5">
            <li className=" text-white">
              Overview.{" "}
              <span className=" text-neutral-400">
                Driven by an unwavering passion for coding, I am constantly
                seeking to expand my knowledge and skills beyond the boundaries
                of what is currently known.
              </span>
            </li>
          </ul>
        </div>

        {/* Cards Container */}
        <div className=" flex w-full gap-2 flex-wrap justify-center lg:justify-normal">
          <SingleDataUnitCard
            data={16}
            dataTitle="Languages Known"
            gradientColorTo="to-cyan-800/10"
          />
          <SingleDataUnitCard
            data={29}
            dataTitle="Frameworks Known"
            gradientColorTo="to-purple-800/10"
          />
          <SingleDataUnitCard
            data={2}
            dataTitle="Years of Experience"
            gradientColorTo="to-green-800/10"
          />
          <SingleDataUnitCard
            data={0}
            dataTitle="Project Contributions"
            gradientColorTo="to-pink-800/10"
          />
        </div>

        {/* Seperator */}
        <div className=" border-b border-neutral-800 w-full my-16" />

        {/* Subject */}
        <div className="mb-5">
          <ul className=" list-disc ml-5">
            <li className=" text-white">
              Projects.{" "}
              <span className=" text-neutral-400">
                Explore the diverse selection of projects.
              </span>
            </li>
          </ul>
        </div>

        <div className=" border border-neutral-700 h-56 bg-neutral-800/40 rounded-lg flex flex-col p-3">
          <div className=" flex">
            <h1 className=" border border-neutral-700 rounded-md text-sm text-neutral-600 px-1 border-width-[1px] ">
              Data
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
