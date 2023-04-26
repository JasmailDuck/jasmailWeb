import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion as m } from "framer-motion";
import M_skillCard from "../cards/M_skillCard";

//------------------------------------------------------ MODAL ------------------------------------------------------//
export const downloadResumeModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "download" && (
        <m.div
          initial={{ opacity: 0 }}
          animate={modelStateID ? { opacity: 1 } : {}}
          exit={{ opacity: 0 }}
          className="bg-white/50 backdrop-blur-2xl w-screen h-full top-0 left-0 absolute z-20 flex justify-center items-center "
        >
          <m.div layoutId="download" className=" flex flex-col justify-center">
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
                onClick={() => {
                  setModalStateId("");
                }}
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

export const fullstackDevModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "FullStackDevelopment" && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.5, ease: "easeInOut" } }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="w-screen h-full top-0 left-0 absolute z-20 flex justify-center items-center bg-black/10 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
        >
          <m.div className=" flex flex-col items-center justify-center w-full max-w-screen-xl  h-screen p-5">
            <m.div
              initial={{ opacity: 0, translateY: 100 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { ease: "easeInOut", delay: 0.5 },
              }}
              exit={{ opacity: 0, translateY: 100 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className=" bg-white w-5/6 drop-shadow-2xl rounded-lg p-5 flex flex-col "
            >
              <div className=" mb-5">
                <m.h1
                  initial={{ opacity: 0, translateY: 100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
                  className=" text-xl font-bold"
                >
                  Full Stack Devlopment | Skill Showcase
                </m.h1>
              </div>

              <m.div className="flex flex-wrap justify-center items-center text-center justify-self-center ">
                <M_skillCard listPos={1} title={"Java"} />
                <M_skillCard listPos={2} title={"Python"} />
                <M_skillCard listPos={3} title={"Swift"} />
                <M_skillCard listPos={4} title={"Kotlin"} />
                <M_skillCard listPos={5} title={"Dart"} />
                <M_skillCard listPos={6} title={"HTML"} />
                <M_skillCard listPos={7} title={"CSS"} />
                <M_skillCard listPos={8} title={"JS"} />
                <M_skillCard listPos={9} title={"TS"} />
                <M_skillCard listPos={10} title={"PHP"} />
                <M_skillCard listPos={11} title={"XML"} />
                <M_skillCard listPos={12} title={"Latex"} />
              </m.div>
              <div className=" relative flex-1">
                <m.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { delay: 0, ease: "easeInOut" },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { delay: 0, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 1.3 }}
                  onClick={() => setModalStateId("")}
                  className=" bg-gradient-to-br from-cyan-400 to-green-400 p-3 rounded-lg w-32 text-white font-bold absolute right-0 -bottom-10  "
                >
                  CLOSE
                </m.button>
              </div>
            </m.div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
export const dataAnalysisModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "Data/BusinessAnalysis" && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.5, ease: "easeInOut" } }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="w-screen h-full top-0 left-0 absolute z-20 flex justify-center items-center bg-black/10 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
        >
          <m.div className=" flex flex-col items-center justify-center w-full max-w-screen-xl  h-screen p-5">
            <m.div
              initial={{ opacity: 0, translateY: 100 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { ease: "easeInOut", delay: 0.5 },
              }}
              exit={{ opacity: 0, translateY: 100 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className=" bg-white  w-5/6 drop-shadow-2xl rounded-lg p-5 flex flex-col "
            >
              <div className=" mb-5">
                <m.h1
                  initial={{ opacity: 0, translateY: 100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
                  className=" text-xl font-bold"
                >
                  Data/Business Analysis | Skill Showcase
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center ">
                <M_skillCard listPos={1} title={"Power BI"} />
                <M_skillCard listPos={2} title={"Power Apps"} />
                <M_skillCard listPos={3} title={"MySQL"} />
                <M_skillCard listPos={4} title={"Mongo DB"} />
                <M_skillCard listPos={5} title={"Excel"} />
                <M_skillCard listPos={6} title={"Jupyter Notebook"} />
              </m.div>
              <div className=" relative flex-1">
                <m.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { delay: 0, ease: "easeInOut" },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { delay: 0, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 1.3 }}
                  onClick={() => setModalStateId("")}
                  className=" bg-gradient-to-br from-cyan-400 to-green-400 p-3 rounded-lg w-32 text-white font-bold absolute right-0 -bottom-10  "
                >
                  CLOSE
                </m.button>
              </div>
            </m.div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
