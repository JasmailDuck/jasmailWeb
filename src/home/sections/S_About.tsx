import React from "react";

const S_About = () => {
  return (
    <section
      id="S_AboutWrapper"
      className=" flex justify-center h-screen overflow-x-hidden mb-5"
    >
      <div id="S_About" className=" max-w-screen-xl w-full flex flex-col px-5 ">
        <div className=" flex">
          <div className="pr-5">
            <h1 className="text-3xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 tracking-widest">
              FULL STACK DEVELOPER
            </h1>
            <h1 className="text-3xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
              DATA ANALYST
            </h1>
            <h1 className="text-5xl w-2/3 font-black ">That's me!</h1>
          </div>
          <div className=" flex-1 text-lg text-neutral-500 pl-5 border-l">
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
      </div>
    </section>
  );
};

export default S_About;
