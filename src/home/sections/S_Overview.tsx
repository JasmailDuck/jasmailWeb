import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, delay, motion as m } from "framer-motion";
import { useState } from "react";

const S_Overview = () => {
  //------------------------------------------------------ STATES ------------------------------------------------------//

  const [resumeIsHovered, setResumeIsHovered] = useState(false);
  const [modalState, setModalState] = useState("");

  //------------------------------------------------------ MODAL ------------------------------------------------------//
  const downloadResumeModal = () => {
    return (
      <AnimatePresence>
        {modalState && (
          <m.div
            initial={{ opacity: 0 }}
            animate={modalState ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            className="bg-white/50 backdrop-blur-2xl w-screen h-screen top-0 left-0 absolute z-10 flex justify-center items-center"
          >
            <m.div
              layoutId="download"
              className=" flex flex-col justify-center"
            >
              <h1 className=" text-3xl mb-5 font-bold  w-72">
                Downloading Resume
              </h1>
              <m.div
                transition={{
                  repeat: Infinity,
                  ease: "easeInOut",
                  duration: 1.5,
                  repeatType: "reverse",
                  repeatDelay: 0.5,
                  delay: 1,
                }}
                animate={{
                  width: [8, 288, 8],
                  translateX: [0, 0, 280],
                }}
                className=" h-2 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 w-2 mb-10"
              />

              <m.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, ease: "anticipate", delay: 4 }}
                className=" text-center"
              >
                <h1 className=" text-neutral-500 text-md">
                  Download not started?{" "}
                  <span className=" underline hover: cursor-pointer">
                    Click Here
                  </span>
                </h1>
                <h1
                  className=" text-neutral-500 hover: cursor-pointer"
                  onClick={() => setModalState("")}
                >
                  {"< "}Go Back
                </h1>
              </m.div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    );
  };
  //------------------------------------------------------ HTML ------------------------------------------------------//
  return (
    // The first section of the home page: Overview
    <section id="S_OverviewWrapper" className=" flex justify-center">
      {downloadResumeModal()}
      {/* Section Container */}
      <div
        id="S_OverviewContainer"
        className=" max-w-screen-xl w-full flex px-5 mb-96"
      >
        {/* Intro Content Container */}
        <div id="S_OverviewIntoContainer" className=" flex-1 flex items-start ">
          {/* Intro Content */}
          <div id="S_OverviewIntroContent" className=" h-96 mt-32 w-full">
            {/* Intro Bio Container */}
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "backInOut", duration: 1 }}
              id="S_OverviewBioContainer"
              className=" text-6xl font-extrabold flex flex-col "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-1">
                Fullstack Developer
              </span>
              <span className="mb-1">Data Analyst</span>
              <span className="mb-1">BCIS</span>
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
              className=" flex w-full h-12 font-bold"
            >
              <div className=" relative w-40">
                <div className="h-12 w-36 bg-gradient-to-r from-cyan-400 to-green-400 absolute top-2 left-2 rounded-md" />
                <m.button
                  whileHover={{ x: 8, y: 8 }}
                  whileTap={{ backgroundColor: "transparent" }}
                  className=" bg-black absolute h-12 w-36 text-white rounded-md"
                >
                  Contact
                </m.button>
              </div>
              <m.div
                layoutId="download"
                onClick={() => setModalState("download")}
                onMouseEnter={() => setResumeIsHovered(true)}
                onMouseLeave={() => setResumeIsHovered(false)}
                className="ml-5 text-xl self-center flex hover:cursor-pointer bg-white"
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
        <div className=" flex-1 "></div>
      </div>
    </section>
  );
};

export default S_Overview;
