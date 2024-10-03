import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Music",
    "Movies",
    "Live",
    "Facts",
    "Gaming",
    "Cricket",
    "Cooking",
  ];
  return (
    <div className="flex">
      {btnList.map((btnName) => (
        <Button key={btnName} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
