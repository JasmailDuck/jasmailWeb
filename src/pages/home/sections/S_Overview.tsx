import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, delay, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { PageUtils } from "../../../utils/pageUtils";

interface propTypes {
  setModalState: React.Dispatch<React.SetStateAction<String>>;
  modelStateID: String;
}

const S_Overview = (props: propTypes) => {
  //------------------------------------------------------ STATES ------------------------------------------------------//

  const [resumeIsHovered, setResumeIsHovered] = useState(false);

  useEffect(() => {
    props.modelStateID == ""
      ? PageUtils.enableScrolling()
      : PageUtils.disableScrolling();

    return () => {
      PageUtils.enableScrolling();
    };
  });

  //------------------------------------------------------ HTML ------------------------------------------------------//
  return (
    // The first section of the home page: Overview
    <section id="S_OverviewWrapper" className=" flex justify-center">
      {/* Section Container */}
      <div
        id="S_OverviewContainer"
        className=" lg:max-w-screen-xl w-full flex px-5 mb-96"
      >
        {/* Intro Content Container */}
        <div id="S_OverviewIntoContainer" className=" flex-1 flex items-start ">
          {/* Intro Content */}
          <div
            id="S_OverviewIntroContent"
            className=" h-96 lg:mt-32 mt-20 w-full"
          >
            {/* Intro Bio Container */}
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "backInOut", duration: 1 }}
              id="S_OverviewBioContainer"
              className=" text-6xl font-extrabold flex flex-col  "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-1">
                Fullstack Developer
              </span>
              <span className="mb-1 text-white">Data Analyst</span>
              <span className="mb-1 text-white">BCIS</span>
            </m.div>

            {/* Intro Bio Description */}
            <m.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.3 }}
              className="text-xl my-5  text-neutral-500"
            >
              Hi, I'm Jasmail. Driven by an unwavering passion for coding, I am
              constantly seeking to expand my knowledge and skills beyond the
              boundaries of what is currently known.
            </m.h2>

            {/* Intro Options Container */}
            <m.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.5 }}
              id="S_OverviewOptionsContainer"
              className=" flex lg:flex-row w-full h-12 font-bold flex-col lg:mt-0 mt-10"
            >
              <div className=" relative w-40">
                <div className="h-12 w-36 bg-gradient-to-r from-cyan-400 to-green-400 absolute top-2 left-2 rounded-md" />
                <m.button
                  whileHover={{ x: 8, y: 8 }}
                  whileTap={{ backgroundColor: "transparent" }}
                  className=" bg-neutral-800 absolute h-12 w-36 text-white rounded-md"
                >
                  Contact
                </m.button>
              </div>
              <m.div
                layoutId="download"
                onClick={() => props.setModalState("download")}
                onMouseEnter={() => setResumeIsHovered(true)}
                onMouseLeave={() => setResumeIsHovered(false)}
                className="lg:ml-5 text-xl lg:self-center flex hover:cursor-pointer text-white mt-20 lg:mt-0 "
              >
                <h1>Download Resume</h1>

                <m.div animate={resumeIsHovered ? { translateX: 10 } : {}}>
                  <ArrowRightIcon className="ml-3 w-6" />
                </m.div>
              </m.div>
            </m.div>
          </div>
        </div>

        {/* Intro Image Container */}
        <div className=" lg:flex-1 lg:flex hidden "></div>
      </div>
    </section>
  );
};

export default S_Overview;
