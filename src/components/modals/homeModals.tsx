import { AnimatePresence, motion as m } from "framer-motion";

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
          initial={{ opacity: 0 }}
          animate={modelStateID ? { opacity: 1 } : {}}
          exit={{ opacity: 0 }}
          className="bg-black/50 backdrop-blur-2xl w-screen h-full absolute  z-20 flex justify-center items-center"
        >
          <m.div
            layoutId="FullStackDevelopment"
            className=" flex items-center justify-center w-full max-w-screen-xl h-screen"
          >
            <div className="w-full flex flex-col m-5 bg-white px-5 pb-5 rounded-lg ">
              <div className=" w-full flex h-20 items-center">
                <h1 className=" flex-1 text-5xl font-bold">
                  Full Stack Development
                </h1>

                <h1
                  className="text-5xl font-bold"
                  onClick={() => setModalStateId("")}
                >
                  X
                </h1>
              </div>

              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                itaque sit ipsum veniam, autem maiores facilis similique
                cupiditate a, illum vitae reprehenderit sunt distinctio. Fugiat
                ea a consequatur at ipsa? Distinctio earum voluptatum ipsam
                numquam dolores nobis dignissimos veniam suscipit cupiditate
                consectetur! Quam tempora officiis obcaecati error ab labore
                facere quia, vitae voluptas at nostrum corporis esse illum
                voluptatum velit accusantium itaque quas. Numquam deleniti
                nostrum fuga labore earum ea aspernatur hic voluptatum quas
                sapiente, omnis ipsa cupiditate doloremque esse dicta corrupti
                iure vitae neque aliquid recusandae suscipit eos delectus! Hic
                cumque minus nostrum natus fugit, doloribus consequuntur commodi
                laborum numquam eaque nihil. Illum officiis eos exercitationem,
                at quia necessitatibus a quasi, provident, numquam consequuntur
                ex commodi ut expedita quis neque hic eius accusamus ab saepe
                praesentium. Quae debitis et inventore ipsum nobis, iure eos
                natus optio necessitatibus! Obcaecati repudiandae minus
                provident enim quas veniam vero quisquam natus voluptatum dolore
                tenetur atque officiis mollitia quibusdam ullam consectetur
                nulla harum adipisci, laudantium ipsum reiciendis facilis!
                Perferendis eaque sunt delectus dolorum, nisi dicta animi in!
                Ullam, reiciendis culpa totam commodi deserunt qui in optio.
                Minima, est doloribus provident, reiciendis aspernatur
                voluptatibus praesentium in dolores deserunt eius, sequi ad
                minus! Soluta dicta impedit ipsa accusamus modi odit optio, id
                qui quis pariatur repellat voluptas rerum sunt placeat error
                minima nobis beatae sequi maiores ea nihil et quod labore neque!
                Officiis odit corrupti, molestiae blanditiis architecto officia
                aspernatur temporibus, dicta rerum numquam accusamus tempora.
                Excepturi quidem vero reprehenderit cumque magnam dolorum nemo
                earum corporis eos? Culpa, nam sit maxime qui quibusdam ipsum
                provident? Incidunt adipisci quasi voluptatem ullam ab tempora
                at non sit officiis, nemo quibusdam nostrum voluptates, libero
                illo iste ipsa quod maiores reiciendis quis eligendi
                repudiandae. Alias repudiandae hic harum. Aperiam soluta maiores
                dolorem saepe fugiat sint quas architecto est natus tenetur!
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
