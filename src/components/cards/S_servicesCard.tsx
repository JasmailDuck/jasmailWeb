import { motion as m, useInView } from "framer-motion";
import { RefAttributes, SVGProps, useRef } from "react";

interface propTypes {
  title: string;
  desc: string;
  l1: string;
  l2: string;
  l3: string;
  icon: React.ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  width?: string;
  setModalID: React.Dispatch<React.SetStateAction<String>>;
}

const S_servicesCard = (props: propTypes) => {
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descrRef = useRef(null);
  const l1Ref = useRef(null);
  const l2Ref = useRef(null);
  const l3Ref = useRef(null);

  const iconInView = useInView(iconRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  const descTextInView = useInView(descrRef, { once: true });
  const l1InView = useInView(l1Ref, { once: true });
  const l2InView = useInView(l2Ref, { once: true });
  const l3InView = useInView(l3Ref, { once: true });

  return (
    <div className=" mx-10 ">
      <m.div
        ref={iconRef}
        initial={{ opacity: 0, y: 100 }}
        animate={iconInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, ease: "backInOut", duration: 1 }}
        className=" mb-5 "
      >
        <props.icon className=" w-20 " />
      </m.div>
      <div className="mb-5">
        <m.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 100 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, ease: "backInOut", duration: 1 }}
          className="text-3xl font-bold mb-5"
        >
          {props.title}
        </m.h1>
        <m.p
          ref={descrRef}
          initial={{ opacity: 0, y: 100 }}
          animate={descTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, ease: "backInOut", duration: 1 }}
          className={" text-lg text-neutral-500 " + props.width}
        >
          {props.desc}
        </m.p>
      </div>
      <ul className=" list-inside list-disc font-bold text-lg flex flex-col">
        <m.li
          ref={l1Ref}
          layoutId={props.l1.replaceAll(/\s/g, "")}
          initial={{ opacity: 0, y: 100 }}
          animate={l1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, ease: "backInOut", duration: 1 }}
          className=" my-2 underline hover: cursor-pointer bg-white"
          onClick={() => {
            props.setModalID(props.l1.replaceAll(/\s/g, ""));
          }}
        >
          {props.l1}
        </m.li>
        <m.li
          ref={l2Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={l2InView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, ease: "backInOut", duration: 1 }}
          className=" my-2 underline hover:cursor-pointer"
          onClick={() => props.setModalID(props.l2.replaceAll(/\s/g, ""))}
        >
          {props.l2}
        </m.li>
        <m.li
          ref={l3Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={l3InView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, ease: "backInOut", duration: 1 }}
          className=" my-2 underline hover:cursor-pointer"
          onClick={() => props.setModalID(props.l3.replaceAll(/\s/g, ""))}
        >
          {props.l3}
        </m.li>
      </ul>
    </div>
  );
};

export default S_servicesCard;
