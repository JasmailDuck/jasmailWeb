import {
  Square3Stack3DIcon,
  BoltIcon,
  ArrowTopRightOnSquareIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import S_servicesCard from "../../../components/cards/S_servicesCard";
import { AnimatePresence, motion as m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PageUtils } from "../../../components/utils/pageUtils";

interface propTypes {
  setModalState: React.Dispatch<React.SetStateAction<String>>;
  modelStateID: String;
}

const S_Service = (props: propTypes) => {
  //------------------------------------------------------ LIB INITS ------------------------------------------------------//

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const helpTextRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const subtitleInView = useInView(subtitleRef, { once: true });
  const helpTextInView = useInView(helpTextRef, { once: true });

  useEffect(() => {
    props.modelStateID == ""
      ? PageUtils.enableScrolling()
      : PageUtils.disableScrolling();

    return () => {
      PageUtils.enableScrolling();
    };
  });

  //------------------------------------------------------ HTML ------------------------------------------------------//
  return (
    <section id="S_ServiceWrapper" className=" flex justify-center mb-56">
      <div
        id="S_Services"
        className=" max-w-screen-xl w-full flex flex-col px-5"
      >
        <div className=" flex flex-col items-center lg:mb-32">
          <m.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 100 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, ease: "backInOut", duration: 1 }}
            className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest"
          >
            {" "}
            SERVICES{" "}
          </m.h1>

          <m.h1
            ref={subtitleRef}
            initial={{ opacity: 0, y: 100 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, ease: "backInOut", duration: 1 }}
            className="lg:text-6xl w-2/3 text-center font-black text-white text-3xl "
          >
            Workflow that ensures all requirements are met
          </m.h1>
          <m.div
            ref={helpTextRef}
            initial={{ opacity: 0, y: 100 }}
            animate={helpTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, ease: "backInOut", duration: 1 }}
            className=" text-neutral-500 flex"
          >
            Click on a<span className="underline mx-1">bullet point</span>
            <ArrowTopRightOnSquareIcon className="w-5 mr-1" />
            for more information
          </m.div>
        </div>

        <div className="flex justify-center lg:flex-row flex-col ">
          <S_servicesCard
            title="What I can do for you"
            desc="Consistency, Fast, and Reliable. Here are some of the services and skill set I provide:"
            l1="Full Stack Development"
            l2="Data/Business Analysis"
            l3="Prototyping"
            icon={Square3Stack3DIcon}
            width="w-72"
            setModalID={props.setModalState}
          />
          <S_servicesCard
            title="Applications I'm fluent in"
            desc="Not just limited to one application, I have touched the waters of many, some you may not even expected:"
            l1="Multimedia"
            l2="Programming"
            l3="Data"
            icon={BoltIcon}
            width=" w-80"
            setModalID={props.setModalState}
          />
          <S_servicesCard
            title="What can you expect"
            desc=" Best Practises, clean code, and efficient use of third party tools... Expect production ready work: "
            l1="Clean and functional"
            l2="User Friendly"
            l3="Efficient and maintainable"
            icon={UserIcon}
            width="w-72"
            setModalID={props.setModalState}
          />
        </div>
      </div>
    </section>
  );
};

export default S_Service;
