import {
  Square3Stack3DIcon,
  BoltIcon,
  ArrowTopRightOnSquareIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import S_servicesCard from "../../componets/cards/S_servicesCard";

const S_Service = () => {
  return (
    <section id="S_ServiceWrapper" className=" flex justify-center mb-56">
      <div
        id="S_Services"
        className=" max-w-screen-xl w-full flex flex-col px-5"
      >
        <div className=" flex flex-col items-center mb-32">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
            {" "}
            SERVICES{" "}
          </h1>

          <h1 className="text-6xl w-2/3 text-center font-black  ">
            Workflow that ensures all requirements are met
          </h1>
          <div className=" text-neutral-500 flex">
            Click on a<span className="underline mx-1">bullet point</span>
            <ArrowTopRightOnSquareIcon className="w-5 mr-1" />
            for more information
          </div>
        </div>

        <div className="flex justify-center ">
          <S_servicesCard
            title="What I can do for you"
            desc="Consistency, Fast, and Reliable. Here are some of the services and skill set I provide:"
            l1="Full Stack Development"
            l2="Data/Business Analysis"
            l3="Prototyping"
            icon={Square3Stack3DIcon}
            width="w-72"
          />
          <S_servicesCard
            title="Applications I'm fluent in"
            desc="Not just limited to one application, I have touched the waters of many, some you may not even expected:"
            l1="Multimedia"
            l2="Programming"
            l3="Data"
            icon={BoltIcon}
            width=" w-80"
          />
          <S_servicesCard
            title="What can you expect"
            desc=" Best Practises, clean code, and efficient use of third party tools... Expect production ready work: "
            l1="Clean and functional"
            l2="User Friendly"
            l3="Efficient and maintainable"
            icon={UserIcon}
            width="w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default S_Service;
