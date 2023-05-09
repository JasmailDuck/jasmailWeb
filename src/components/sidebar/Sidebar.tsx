import JasmailProfilePic from "../../assets/profile/JasmailProfile.jpg";
import { HomeIcon as HomeIconOutline } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";
import { CodeBracketSquareIcon as CodeBracketOutline } from "@heroicons/react/24/outline";
import { CodeBracketSquareIcon as CodeBracketSolid } from "@heroicons/react/24/solid";
import MenuItems from "../navigation/MenuItems";
const Sidebar = () => {
  return (
    <nav className=" bg-neutral-800/50 w-80 h-full border-r border-neutral-700 text-white pt-16 hidden lg:block">
      {/* Personal Info Container */}
      <div className=" w-full h-48 flex flex-col justify-center items-center mb-16 ">
        <img
          src={JasmailProfilePic}
          className="w-24 rounded-full h-24 object-cover mb-2 border border-neutral-700"
          alt=""
        />
        <h1 className=" text-xl ">Jasmail S. Duck</h1>
        <h2 className=" text-sm text-neutral-400">Fullstack Developer</h2>
      </div>

      {/* Navigation Container */}
      <div className=" flex flex-col w-full px-5">
        <MenuItems
          icon={HomeIconOutline}
          iconSelected={HomeIconSolid}
          title="Home"
          navigateTo="/"
        />
        <MenuItems
          icon={CodeBracketOutline}
          iconSelected={CodeBracketSolid}
          title="Projects"
          navigateTo="/projects"
        />
      </div>
    </nav>
  );
};

export default Sidebar;
