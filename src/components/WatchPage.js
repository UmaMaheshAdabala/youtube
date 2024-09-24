import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="px-5">
        <iframe
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="m-5 p-2">
        <CommentsContainer />
      </div>{" "}
    </div>
  );
};

export default WatchPage;
