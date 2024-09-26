import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { randomMessage, randomName } from "../utils/helper";
import { addMessage } from "../utils/liveChatSlice";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5  w-full flex">
        <div className="">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="items-center ">
          <LiveChat />
        </div>
      </div>
      <div className="m-5 p-2 w-[900px]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
