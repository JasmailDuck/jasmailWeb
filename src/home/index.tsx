import Navbar from "../components/navbar/Navbar";
import S_About from "./sections/S_About";
import S_Activity from "./sections/S_Activity";
import S_Blogs from "./sections/S_Blogs";
import S_Overview from "./sections/S_Overview";
import S_Projects from "./sections/S_Projects";
import S_Service from "./sections/S_Service";

const index = () => {
  return (
    <div>
      <Navbar />
      <S_Overview />
      <S_Service />
      <S_Projects />
      <S_Blogs />
      <S_About />
      <S_Activity />
    </div>
  );
};

export default index;
