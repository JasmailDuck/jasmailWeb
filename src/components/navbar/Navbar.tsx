import { useEffect } from "react";

const Navbar = () => {
  let aboutSection: HTMLElement | null;
  let servicesSection: HTMLElement | null;
  let projectSection: HTMLElement | null;

  const handleScrollToOnClick = (element: HTMLElement | null) => {
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    aboutSection = document.getElementById("S_AboutWrapper");
    servicesSection = document.getElementById("S_ServiceWrapper");
    projectSection = document.getElementById("S_ProjectWrapper");
  });

  return (
    <nav id="navbarwrapper" className="h-20 flex justify-center">
      <div
        id="navbarcontainer"
        className=" max-w-screen-xl h-full w-full flex items-center px-5 text-lg tracking-wider"
      >
        <h1 className=" flex-1  ">Jasmail Duck</h1>

        <div id="navlinkcontainer" className=" flex">
          <div
            className="mx-2 hover:cursor-pointer"
            onClick={() => handleScrollToOnClick(aboutSection)}
          >
            About
          </div>
          <div
            className="mx-2 hover:cursor-pointer"
            onClick={() => handleScrollToOnClick(servicesSection)}
          >
            Services
          </div>
          <div
            className="mx-2 hover:cursor-pointer"
            onClick={() => handleScrollToOnClick(projectSection)}
          >
            Projects
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
