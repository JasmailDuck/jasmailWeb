import Navbar from "../components/navbar/Navbar";
import S_Overview from "./sections/S_Overview";
import S_Service from "./sections/S_Service";

const index = () => {
  return (
    <div>
      <Navbar />
      <S_Overview />
      <S_Service />
    </div>
  );
};

export default index;
