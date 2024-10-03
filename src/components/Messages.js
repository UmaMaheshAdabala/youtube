import React from "react";
import { USER_LOGO } from "../utils/constants";

const Messages = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center shadow-lg border border-gray-400">
        <img src={USER_LOGO} alt="USER" className="h-8" />
        <spam className="font-bold p-1">{name}</spam>
        <span> {message} </span>
      </div>
    </div>
  );
};

export default Messages;
