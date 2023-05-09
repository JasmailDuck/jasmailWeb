import React, { RefAttributes, SVGProps, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface propTypes {
  title: string;
  navigateTo: string;
  icon: React.ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  iconSelected: React.ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
}

const MenuItems = (props: propTypes) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedState, setSelectedState] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === props.navigateTo) setSelectedState(true);

    return () => {
      setSelectedState(false);
    };
  });

  const SELECTED_STYLE = "border border-neutral-700 bg-neutral-800 text-white ";
  const UNSELECTED_STYLE = "text-neutral-400 border-neutral-700 ";

  return (
    <div
      onClick={() => navigate(props.navigateTo)}
      className={
        "rounded-lg w-full h-11 flex items-center px-2 hover:cursor-pointer transition-all  " +
        (selectedState ? SELECTED_STYLE : UNSELECTED_STYLE)
      }
    >
      {selectedState ? (
        <props.iconSelected className="w-5 mr-2" />
      ) : (
        <props.icon className="w-5 mr-2" />
      )}
      <h1 className="flex-1 text-sm ">{props.title}</h1>
    </div>
  );
};

export default MenuItems;
