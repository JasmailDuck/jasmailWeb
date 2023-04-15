import { RefAttributes, SVGProps } from "react";

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
}

const S_servicesCard = (props: propTypes) => {
  return (
    <div className=" mx-10 ">
      <div className=" mb-5 ">
        <props.icon className=" w-20" />
      </div>
      <div className="mb-5">
        <h1 className="text-3xl font-bold mb-5">{props.title}</h1>
        <p className={" text-lg text-neutral-500 " + props.width}>
          {props.desc}
        </p>
      </div>
      <ul className=" list-inside list-disc font-bold text-lg flex flex-col">
        <li className=" my-2 underline">{props.l1}</li>
        <li className=" my-2 underline">{props.l2}</li>
        <li className=" my-2 underline">{props.l3}</li>
      </ul>
    </div>
  );
};

export default S_servicesCard;
