import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion as m } from "framer-motion";
import M_fullStackDevCard from "../cards/M_fullStackDevCard";

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
          className="bg-white/50 backdrop-blur-2xl w-screen h-full top-0 left-0 absolute z-20 flex justify-center items-center"
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
          layoutId="FullStackDevelopment"
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="w-screen h-full top-0 left-0 absolute z-20 flex justify-center items-center bg-white/50 backdrop-blur-2xl overflow-y-auto overflow-x-hidden"
        >
          <m.div className=" flex flex-col w-full max-w-screen-xl  h-screen p-5 m-5 ">
            <div className=" flex items-center mb-10">
              <h1 className="text-3xl flex-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400  tracking-widest">
                Full Stack Development
              </h1>
              <div
                onClick={() => setModalStateId("")}
                className=" flex items-center hover:cursor-pointer"
              >
                <h1 className=" mx-2 text-lg">Go Back</h1>
                <ArrowLeftOnRectangleIcon className="w-6" />
              </div>
            </div>

            <div className=" mb-5 ">
              <h1 className="text-6xl font-black  ">
                An overview what I can do and know.
              </h1>
            </div>
            <div className=" flex flex-wrap mb-2">
              <M_fullStackDevCard title={"Java"} />
              <M_fullStackDevCard title={"Python"} />
              <M_fullStackDevCard title={"Kotlin"} />
              <M_fullStackDevCard title={"Dart"} />
            </div>
            <div className=" flex flex-wrap mb-2">
              <M_fullStackDevCard title={"HTML"} />
              <M_fullStackDevCard title={"CSS"} />
              <M_fullStackDevCard title={"JS"} />
              <M_fullStackDevCard title={"TS"} />
              <M_fullStackDevCard title={"PHP"} />
            </div>

            <div className=" flex flex-wrap mb-10">
              <M_fullStackDevCard title={"Node.js"} />
              <M_fullStackDevCard title={"React"} />
              <M_fullStackDevCard title={"Vite"} />
              <M_fullStackDevCard title={"Tailwind"} />
              <M_fullStackDevCard title={"Flutter"} />
              <M_fullStackDevCard title={"Prisma"} />
            </div>

            <h1 className="text-4xl font-black ">In Depth</h1>
            <p className=" text-xl text-neutral-500 mb-5">
              As an experienced developer proficient in multiple programming
              languages, including Java, Python, Kotlin, Dart, HTML, CSS,
              JavaScript, TypeScript, PHP, Node.js, React, Vite, Tailwind,
              Flutter, and Prisma, I bring a diverse skill set to the table.
              With a strong foundation in modern web and mobile development
              technologies, I am eager to expand my knowledge further by
              learning additional languages and tools.
            </p>

            <ul className="text-xl text-neutral-500  p-5 mr-1 flex-1">
              <li className=" p-5 border-y">
                Expertise in Java, Python, Kotlin, Dart, and other languages.
              </li>
              <li className=" p-5 border-b">
                Wide range of application development experience, including
                server-side, front-end, and mobile app development.
              </li>
              <li className=" p-5 border-b">
                Strong skills in building robust, scalable, and high-performance
                applications.
              </li>
              <li className=" p-5 border-b">
                Utilization of best practices, design patterns, and cutting-edge
                technologies.
              </li>
            </ul>

            <p className="text-xl bg-gradient-to-r from-cyan-400 text-center to-green-400 p-5 text-white rounded-lg my-5 flex-1">
              In addition to my programming skills, I am also proficient in
              HTML, CSS, JavaScript, and TypeScript, which enable me to create
              dynamic and visually appealing user interfaces. I have hands-on
              experience with PHP, Node.js, and frameworks such as React, Vite,
              and Tailwind, which provide me with the ability to develop
              responsive web applications and leverage the power of the backend
              for data processing.
            </p>

            <p className=" text-xl text-neutral-500 mb-5">
              Furthermore, I am skilled in Flutter, a popular cross-platform
              framework for mobile app development, and Prisma, a powerful ORM
              (Object Relational Mapping) tool for building scalable and
              performant databases. With my existing knowledge and expertise, I
              am well-equipped to adapt and learn new languages and tools, and I
              am excited about the opportunities they will bring.
            </p>
            <p className=" text-xl text-neutral-500 mb-5">
              As a passionate learner, I am always eager to acquire new skills
              and stay up-to-date with the latest advancements in the field of
              software development. My diverse skill set and willingness to
              learn make me a valuable asset to any development team, and I am
              committed to delivering high-quality solutions that meet and
              exceed client expectations.
            </p>
            <p className=" text-xl text-neutral-500 pb-10">
              In conclusion, with a solid foundation in multiple programming
              languages and a strong desire to learn more languages and tools, I
              am well-prepared to take on challenging projects and contribute to
              innovative software development initiatives. I am excited about
              the potential for growth and opportunities that expanding my skill
              set will bring, and I am eager to continue my journey as a
              lifelong learner in the dynamic world of technology.
            </p>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
