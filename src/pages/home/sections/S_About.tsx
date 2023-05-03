import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { motion as m } from "framer-motion";
import S_aboutCard from "../../../components/cards/S_aboutCard";

const S_About = () => {
  return (
    <section
      id="S_AboutWrapper"
      className=" flex justify-center overflow-x-hidden mb-32"
    >
      <div id="S_About" className=" max-w-screen-xl w-full flex flex-col px-5 ">
        <div className=" flex lg:flex-row flex-col mb-32 ">
          <div className="pr-5">
            <h1 className="text-3xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 tracking-widest">
              FULL STACK DEVELOPER
            </h1>
            <h1 className="text-3xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
              DATA ANALYST
            </h1>
            <h1 className="text-5xl w-2/3 font-black ">That's me!</h1>
          </div>
          <div className=" flex-1 text-lg text-neutral-500 lg:pl-5 lg:border-l ">
            <p>
              Over the past 4 years, I have had the privilege of working on
              countless projects, leveraging my skills in development and
              learning to create innovative solutions. My experience includes
              collaborating with a diverse range of clients, providing them with
              effective solutions to their challenges, and designing intuitive
              interfaces to enhance their user experience. Through these
              projects, I have developed a deep understanding of data-related
              problems and have honed my expertise in creating practical and
              impactful solutions.
            </p>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col">
          <div className=" flex-1 flex flex-col lg:mr-10 lg:mb-0 mb-10 ">
            <div className="flex items-center lg:mb-16">
              <AcademicCapIcon className=" w-10 lg:mr-5 text-white" />
              <h1 className=" text-3xl font-bold text-white">Education</h1>
            </div>

            <S_aboutCard
              title="Mount Royal University"
              desc="Bachelor of Computer Information Systems"
              desc2="Minor in Economics and Finance"
              duration=" 2019-2023"
            />
            <div className="border-b " />
            <S_aboutCard
              title="FFCA High School"
              desc="Highschool Diploma"
              duration=" 2015-2019"
            />
            <div className="border-b " />
          </div>

          <div className=" flex-1 flex flex-col lg:ml-10 ">
            <div className="flex items-center lg:mb-16">
              <BriefcaseIcon className=" w-10 mr-5 text-white" />
              <h1 className=" text-3xl font-bold text-white">
                Work Experience
              </h1>
            </div>

            <S_aboutCard
              title="Stratsyn Consulting"
              desc="Data & Business Analyst"
              desc2="4 Month Work Term"
              duration=" May 2022- Aug 2022"
            />
            <div className="border-b " />
            <S_aboutCard
              title="Bytewire Inc"
              desc="Front-End Developer"
              duration="Contract Based"
            />
            <div className="border-b " />
            <S_aboutCard
              title="Safeway"
              desc="Grocery/Produce Clerk"
              desc2="Tech Support"
              duration="2018-2021"
            />
            <div className="border-b " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default S_About;
