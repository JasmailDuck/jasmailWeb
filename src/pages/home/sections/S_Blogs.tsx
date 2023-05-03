import { ArrowRightIcon } from "@heroicons/react/24/solid";
import S_blogCard from "../../../components/cards/S_blogCard";

const S_Blogs = () => {
  return (
    <section
      id="S_BlogWrapper"
      className=" flex flex-col items-center bg-black mb-32"
    >
      <div className="relative w-full">
        <div className=" absolute w-full h-72 bg-black -top-72" />
      </div>

      <div
        id="S_Blog"
        className=" max-w-screen-xl w-full flex lg:flex-row flex-col  px-5 "
      >
        <div className=" flex-1">
          <div className="lg:sticky top-0 py-5">
            <h1 className="text-3xl font-bold w-24 text-transparent bg-clip-text  bg-gradient-to-r from-cyan-400 to-green-400 tracking-widest mb-5">
              {" "}
              BLOG{" "}
            </h1>
            <h1 className="text-6xl font-black text-white mb-5 ">
              Comming Soon
            </h1>
            <div className=" text-xl text-white flex items-center hover:cursor-not-allowed  ">
              <h1>View All</h1>
              <ArrowRightIcon className="ml-3 w-5" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <S_blogCard
            title=" How to use Chat-GPT on iOS Siri Shortcuts"
            date="Month 0, 202X | -\- min"
          />
          <div className="border-b border-neutral-600" />
          <S_blogCard
            title=" Creating a simple discord bot"
            date="Month 0, 202X | -\- min"
          />
          <div className="border-b border-neutral-600" />
          <S_blogCard
            title=" How to create a fluid modal using framer-motion"
            date="Month 0, 202X | -\- min"
          />
          <div className="border-b border-neutral-600" />
          <S_blogCard title=" To be added..." date="Month 0, 202X | -\- min" />
          <div className="border-b border-neutral-600" />
          <S_blogCard title=" To be added..." date="Month 0, 202X | -\- min" />
        </div>
      </div>
    </section>
  );
};

export default S_Blogs;
