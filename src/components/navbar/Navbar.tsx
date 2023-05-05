import { useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import GithubIcon from "../../assets/icons/I_Github.svg";
import LinkedInIcon from "../../assets/icons/I_LinkedIn.svg";
import TwitterIcon from "../../assets/icons/I_Twitter.svg";
import GmailIcon from "../../assets/icons/I_Gmail.svg";
import { PageUtils } from "../../utils/pageUtils";

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

  const mobileNavigationLayout = () => {
    return (
      <>
        <m.div
          initial={{ display: "none", opacity: 0 }}
          animate={
            showMenu == "displayMenu"
              ? { display: "flex", opacity: 1, transition: { delay: 0.1 } }
              : {}
          }
          onClick={() => {
            setShowMenu("");
            PageUtils.enableScrolling();
          }}
          className=" h-20 rounded-lg justify-end px-2 mt-4 lg:hidden "
        >
          <XMarkIcon className=" w-10 text-white bg-neutral-700 p-1 rounded-md" />
        </m.div>

        <m.div
          layoutId="displayMenu"
          onClick={() => {
            setShowMenu("displayMenu");
            PageUtils.disableScrolling();
          }}
          className=" bg-neutral-800 w-full h-20 rounded-lg flex items-center px-2 lg:hidden"
        >
          <h1 className=" flex-1 text-white text-xl  ">Jasmail Duck</h1>
          <Bars3Icon className=" w-10 text-white bg-neutral-700 p-1 rounded-md" />
        </m.div>
      </>
    );
  };

  const desktopNavigationLayout = () => {
    return (
      <m.div className=" bg-neutral-800 w-full h-20 rounded-lg lg:flex items-center px-5 hidden">
        <h1 className=" flex-1 text-white text-xl ">Jasmail Duck</h1>
        <div className=" flex">
          <m.div
            onClick={() => handleScrollToOnClick(aboutSection)}
            className=" w-full text-white text-xl p-2 flex items-center uppercase hover:cursor-pointer"
          >
            About
          </m.div>
          <m.div
            onClick={() => handleScrollToOnClick(servicesSection)}
            className=" w-full text-white text-xl p-2 flex items-center uppercase hover:cursor-pointer"
          >
            Services
          </m.div>
          <m.div
            onClick={() => handleScrollToOnClick(projectSection)}
            className=" w-full text-white text-xl p-2 flex items-center uppercase hover:cursor-pointer"
          >
            Projects
          </m.div>
        </div>
      </m.div>
    );
  };

  const [showMenu, setShowMenu] = useState<String>("");

  return (
    <nav
      id="navbarwrapper"
      className=" flex justify-center items-center w-full  flex-col"
    >
      <div
        id="navbarcontainer"
        className=" lg:max-w-screen-xl w-full p-2 text-lg h-20 flex flex-col"
      >
        {mobileNavigationLayout()}
        {desktopNavigationLayout()}
      </div>

      <AnimatePresence>
        {showMenu == "displayMenu" && (
          <m.div className="w-full p-2 flex items-center flex-col fixed top-20 bg-black z-10 h-screen ">
            <m.div
              layoutId="displayMenu"
              exit={{ transition: { delay: 0.5 } }}
              className=" bg-neutral-800 rounded-lg tracking-wider flex flex-col p-2 mb-5 lg:max-w-screen-xl w-full"
            >
              <m.div className=" w-full text-white text-xl p-2 flex items-center mb-2 uppercase">
                About
              </m.div>
              <m.div className=" w-full text-white text-xl p-2 flex items-center mb-2 uppercase">
                Services
              </m.div>
              <m.div className=" w-full text-white text-xl p-2 flex items-center mb-2 uppercase">
                Projects
              </m.div>
            </m.div>

            <m.h1
              initial={{ opacity: 0, translateY: -10 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { delay: 0.2, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                translateY: -10,
                transition: { ease: "easeInOut" },
              }}
              className=" font-bold text-3xl text-white tracking-wider"
            >
              Learn More About Me
            </m.h1>
            <m.h1
              initial={{ opacity: 0, translateY: -10 }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: { delay: 0.3, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                translateY: -10,
                transition: { ease: "easeInOut" },
              }}
              className=" text-lg text-neutral-400 tracking-wider mb-3"
            >
              Visit my profile on other websites.
            </m.h1>
            <div className="flex gap-2">
              <m.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { delay: 0.4, ease: "easeInOut" },
                }}
                exit={{
                  opacity: 0,
                  translateY: -10,
                  transition: { ease: "easeInOut" },
                }}
                className=" bg-purple-900 w-14 h-14 flex justify-center items-center rounded-xl"
              >
                <img src={GithubIcon} alt="" className="w-1/2" />
              </m.div>
              <m.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { delay: 0.4, ease: "easeInOut" },
                }}
                exit={{
                  opacity: 0,
                  translateY: -10,
                  transition: { ease: "easeInOut" },
                }}
                className=" bg-[#0a66c2] w-14 h-14 flex justify-center items-center rounded-xl"
              >
                <img src={LinkedInIcon} alt="" className="w-1/2" />
              </m.div>
              <m.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { delay: 0.4, ease: "easeInOut" },
                }}
                exit={{
                  opacity: 0,
                  translateY: -10,
                  transition: { ease: "easeInOut" },
                }}
                className=" bg-[#1da1f2] w-14 h-14 flex justify-center items-center rounded-xl"
              >
                <img src={TwitterIcon} alt="" className="w-1/2" />
              </m.div>
              <m.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { delay: 0.4, ease: "easeInOut" },
                }}
                exit={{
                  opacity: 0,
                  translateY: -10,
                  transition: { ease: "easeInOut" },
                }}
                className=" bg-[#ea4335] w-14 h-14 flex justify-center items-center rounded-xl"
              >
                <img src={GmailIcon} alt="" className="w-1/2" />
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
