import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import S_projectCard from "../../../components/cards/S_projectCard";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import movieBrowserThumbnail from "../../../assets/projectThumbnails/movieBrowser.png";
import uniAdmin from "../../../assets/projectThumbnails/uniAdmin.png";

const S_Projects = () => {
  const [moveBy, setMoveBy] = useState(0);
  const [disableLeftButton, setDisableLeftButton] = useState(true);

  useEffect(() => {
    moveBy == 0 ? setDisableLeftButton(true) : setDisableLeftButton(false);
  }, [moveBy]);

  return (
    <section
      id="S_ProjectWrapper"
      className=" flex justify-center overflow-x-hidden mb-5"
    >
      <div
        id="S_Project"
        className=" max-w-screen-xl w-full flex flex-col px-5 "
      >
        <div className=" mb-20">
          <h1 className="text-3xl font-semibold  w-44 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
            PROJECTS
          </h1>
          <div className="flex  ">
            <div className="flex-1 ">
              <h1 className="text-6xl w-2/3 font-black ">
                A highlight of my recent doings.
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

        <div className=" relative h-[450px] z-10 mb-10 ">
          <m.div
            animate={{ translateX: moveBy }}
            transition={{ duration: 1, ease: "anticipate" }}
            className=" absolute h-full flex  "
          >
            <S_projectCard
              title="Data Mining and Warehouse"
              type="Data Analysis"
            />
            <S_projectCard
              title="Movie Browser"
              type="Web Full Stack"
              img={movieBrowserThumbnail}
            />
            <S_projectCard
              title="University Admission Tool"
              type="Web Full Stack"
              img={uniAdmin}
            />
            <S_projectCard title="Music Player" type="Android Dev" />
            <S_projectCard title="Pixel Rom Flasher" type="Software Dev" />
            <S_projectCard title="Bookselling Showcase" type="Data Analysis" />
            <S_projectCard title="Chat GPT Discord Bot" type="Bot Dev" />
            <S_projectCard title="Notification Syncer" type="Software Dev" />
          </m.div>
        </div>
        <div className=" z-10 flex justify-end h-20">
          <m.button
            animate={disableLeftButton ? { scale: 0 } : {}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="left"
            className="bg-white h-14 w-14 mx-1 flex justify-center items-center rounded-md"
            onClick={() => {
              moveBy <= 700 * 4 ? setMoveBy(0) : setMoveBy(moveBy + 700);
            }}
          >
            <ChevronLeftIcon className=" w-8" />
          </m.button>
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="right"
            className="bg-white h-14 w-14 mx-1 flex justify-center items-center rounded-md"
            onClick={() => {
              moveBy <= -700 * 4 ? setMoveBy(0) : setMoveBy(moveBy - 700);
            }}
          >
            <ChevronRightIcon className="w-8" />
          </m.button>
        </div>
      </div>
    </section>
  );
};

export default S_Projects;
