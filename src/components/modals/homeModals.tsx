import { AnimatePresence, motion as m } from "framer-motion";
import M_skillCard from "../cards/M_skillCard";

const downloadResume = () => {
  window.open(
    "https://onedrive.live.com/download?cid=8E2651BF1A64E22D&resid=8E2651BF1A64E22D%2157250",
    "Resume Download"
  );
  return "";
};

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
            <div className=" hidden">{setTimeout(downloadResume, 3000)}</div>

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
                <span
                  onClick={() => downloadResume()}
                  className=" underline hover: cursor-pointer"
                >
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

              <m.div className="flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
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
                <M_skillCard listPos={13} title={"Tailwind CSS"} />
                <M_skillCard listPos={14} title={"Flutter"} />
                <M_skillCard listPos={15} title={"React Native"} />
                <M_skillCard listPos={16} title={"Node.JS"} />
                <M_skillCard listPos={17} title={"React"} />
                <M_skillCard listPos={18} title={"Vite"} />
                <M_skillCard listPos={19} title={"Prisma"} />
                <M_skillCard listPos={20} title={"Dax"} />
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

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
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

export const prototypingModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "Prototyping" && (
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
                  Prototyping | Skill Showcase
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
                <M_skillCard listPos={1} title={"Adobe XD"} />
                <M_skillCard listPos={2} title={"Figma"} />
                <M_skillCard listPos={3} title={"Canva"} />
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

export const programmingModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "Programming" && (
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
                  Programming | Skill Showcase
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
                <M_skillCard listPos={1} title={"Git"} />
                <M_skillCard listPos={2} title={"Visual Studio Code"} />
                <M_skillCard listPos={3} title={"IntelliJ IDEA"} />
                <M_skillCard listPos={4} title={"Android Studio"} />
                <M_skillCard listPos={5} title={"XCode"} />
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

export const multimediaModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "Multimedia" && (
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
                  Multimedia | Skill Showcase
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
                <M_skillCard listPos={1} title={"Adobe Suite"} />
                <M_skillCard listPos={2} title={"FL Studios"} />
                <M_skillCard listPos={3} title={"Office 365"} />
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

export const dataModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "Data" && (
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
                  Data | Skill Showcase
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
                <M_skillCard listPos={1} title={"Power Platform"} />
                <M_skillCard listPos={2} title={"Python Libs"} />
                <M_skillCard listPos={3} title={"Excel"} />
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

export const cleanFunctionalModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "Cleanandfunctional" && (
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
                  Clean and Functional | Summary
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
                <h1 className=" text-neutral-500">
                  I prioritize clean and functional code, following best
                  practices for modularity, readability, efficiency, error
                  handling, code reusability, testing, and scalability. My code
                  is organized into self-contained functions or classes with
                  clear naming, comments, and documentation for easy maintenance
                  and understanding. I optimize code for performance while
                  ensuring readability and robust error handling for reliable
                  software. I emphasize code reusability, adhere to the DRY
                  principle, and conduct thorough testing to catch and fix bugs
                  early. I design scalable code that anticipates future changes,
                  ensuring high-quality, efficient, and adaptable software
                  solutions.
                </h1>
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

export const userFriendlyModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "UserFriendly" && (
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
                  User Friendly | Summary
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
                <h1 className=" text-neutral-500">
                  As a software developer, I prioritize writing user-friendly
                  code for intuitive and efficient software solutions. I focus
                  on clear code readability through concise syntax, naming
                  conventions, and comments. I design code for performance and
                  resource efficiency, creating smooth user experiences. I
                  incorporate robust error handling for graceful handling of
                  unexpected situations. I strive for simplicity in the codebase
                  to avoid unnecessary complexity. Overall, my approach aims to
                  create user-friendly software that is intuitive, efficient,
                  and reliable.
                </h1>
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
export const efficientAndMaintainable = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "Efficientandmaintainable" && (
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
                  Efficient and Maintainable | Summary
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap justify-center items-center text-center justify-self-center mb-5 ">
                <h1 className=" text-neutral-500">
                  As a software developer, I prioritize writing code that is
                  efficient and maintainable for optimal performance and
                  simplified maintenance. I design modular components,
                  prioritize code readability, thoroughly test for bugs, and
                  provide comprehensive documentation. Overall, my approach aims
                  to create reliable and stable code that is efficient and easy
                  to maintain.
                </h1>
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
export const inDevModal = (
  modelStateID: String,
  setModalStateId: React.Dispatch<React.SetStateAction<String>>
) => {
  return (
    <AnimatePresence>
      {modelStateID == "dev" && (
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
                  Development Disclaimer
                </m.h1>
              </div>

              <m.div className=" flex flex-wrap items-center  justify-self-center mb-5 ">
                <h1 className=" text-neutral-500">
                  Please take note that the website is still under major
                  development. There will be buttons that won't click.
                  Animations that will never display their brilliance. Links
                  that link to the deepest known void...
                </h1>
                <h1 className=" text-neutral-500">
                  Having said there is enough content available for me to be
                  able to host this site, so please feel free to have a look.
                </h1>
                <a href="https://github.com/JasmailDuck" className="underline ">
                  {" "}
                  Or visit Github
                </a>
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
                  I Understand
                </m.button>
              </div>
            </m.div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
