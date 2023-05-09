import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import SingleDataUnitCard from "../../components/cards/SingleDataUnitCard";
import AttributeTextWithBorder from "../../components/text/AttributeTextWithBorder";

import Web3ThumbnailPic from "../../assets/thumbnails/web3Thumbnail.png";
import Web3ThumbnailPic2 from "../../assets/thumbnails/web3Thumbnail2.png";
import Web3ThumbnailPic3 from "../../assets/thumbnails/web3Thumbnail3.png";

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
          <SingleDataUnitCard data={16} dataTitle="Languages Known" />
          <SingleDataUnitCard data={29} dataTitle="Frameworks Known" />
          <SingleDataUnitCard data={2} dataTitle="Years of Experience" />
          <SingleDataUnitCard data={0} dataTitle="Project Contributions" />
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
        <div className=" border border-neutral-700 h-64 bg-neutral-800/40 rounded-lg flex flex-col p-3">
          <div className=" flex  mb-2">
            <div className=" flex gap-2 flex-1">
              <AttributeTextWithBorder title="Data" />
              <AttributeTextWithBorder title="Full-Stack" />
            </div>

            <div className=" flex gap-2">
              <h1 className=" text-neutral-500">View All </h1>
              <ArrowRightCircleIcon className=" w-5 text-neutral-500" />
            </div>
          </div>

          <h1 className="text-white mb-2">
            Movie Browser{" "}
            <span className=" text-neutral-400">
              | A simple, yet intuitive movie browsing site.
            </span>
          </h1>

          <div className="flex flex-1 items-center gap-2  ">
            <img
              src={Web3ThumbnailPic}
              alt=""
              className=" w-1/3 h-40 rounded-lg object-cover "
            />
            <img
              src={Web3ThumbnailPic2}
              alt=""
              className=" w-1/3 h-40 rounded-lg object-cover "
            />
            <img
              src={Web3ThumbnailPic3}
              alt=""
              className=" w-1/3 h-40 rounded-lg object-cover "
            />
          </div>
        </div>
        {/* Seperator */}
        <div className=" border-b border-neutral-800 w-full my-16" />h
      </div>
    </div>
  );
};

export default Home;
