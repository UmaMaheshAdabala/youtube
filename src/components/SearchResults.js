import React from "react";
import { USER_LOGO } from "../utils/constants";

const SearchResults = ({ data }) => {
  //   console.log(data);
  const { channelTitle, description, thumbnails, title } = data;
  return (
    <div className="flex align-middle p-2 m-2 shadow-lg border border-gray-200 w-[1000px]">
      <div className=" w-[500px] h-[250px]">
        <img
          alt="thumbnail"
          src={thumbnails.medium.url}
          className="h-[250px] w-[500px] rounded-md"
        />
      </div>
      <div className="col-span-6 flex w-[500px] p-2">
        <h1 className="font-bold text-lg">{title} </h1>
      </div>
    </div>
  );
};

export default SearchResults;
