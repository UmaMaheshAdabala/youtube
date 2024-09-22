import React from "react";
import { LOGO_URL, MENU_LOGO, USER_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          alt="Hamberger"
          src={MENU_LOGO}
          className="h-8 cursor-pointer"
          onClick={handleMenu}
        />
        <img alt="Logo" src={LOGO_URL} className="h-6 mt-1 ml-2" />
      </div>
      <div className="col-span-10 ">
        <input
          type="text"
          className="w-[60%] border border-gray-400 rounded-l-3xl p-1"
        />
        <button className="border border-gray-400 rounded-r-3xl p-1">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img src={USER_LOGO} alt="USER" className="h-8" />
      </div>
    </div>
  );
};

export default Head;
