import { motion as m } from "framer-motion";

interface propTypes {
  title: String;
  listPos: number;
}
const M_skillCard = (props: propTypes) => {
  return (
    <m.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.7 + 0.1 * props.listPos,
        ease: "easeInOut",
      }}
      className=" bg-neutral-100 w-1/6 h-20 rounded-lg flex justify-center items-center m-1 "
    >
      <h1 className=" text-2xl uppercase">{props.title}</h1>
    </m.div>
  );
};

export default M_skillCard;
