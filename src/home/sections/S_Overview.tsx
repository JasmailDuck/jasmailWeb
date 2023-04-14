import { ArrowRightIcon } from "@heroicons/react/24/solid";

const S_Overview = () => {
  return (
    <section id="S_OverviewWrapper" className=" flex justify-center">
      <div
        id="S_OverviewContainer"
        className=" max-w-screen-xl w-full  h-screen flex px-5"
      >
        <div className=" flex-1 flex items-start">
          <div className=" h-96 mt-32 w-full">
            <div>
              <div className=" text-6xl font-extrabold flex flex-col">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-1">
                  Fullstack Developer
                </span>
                <span className="mb-1">Data Analyst</span>
                <span className="mb-1">BCIS</span>
              </div>
              <h2 className="text-xl my-5  text-neutral-500">
                Hi, I'm Jasmail. Driven by an unwavering passion for coding, I
                am constantly seeking to expand my knowledge and skills beyond
                the boundaries of what is currently known.
              </h2>

              <div className=" flex w-full h-12 font-bold">
                <div className=" relative w-40">
                  <div className="h-12 w-36 bg-gradient-to-r from-cyan-400 to-green-400 absolute top-2 left-2 rounded-md"></div>
                  <button className=" bg-black absolute h-12 w-36 text-white rounded-md">
                    Contact
                  </button>
                </div>

                <div className="ml-5 text-xl self-center flex  ">
                  <h1>Download Resume</h1>
                  <ArrowRightIcon className="ml-3 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 "></div>
      </div>
    </section>
  );
};

export default S_Overview;
