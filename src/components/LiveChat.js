import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import { randomMessage, randomName } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";

const LiveChat = () => {
  const messageData = useSelector((store) => store.live.message);
  console.log("Subscribed to store");
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      const name = randomName();
      const message = randomMessage(20);
      dispatch(addMessage({ name: name, message: message }));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="m-2 p-2 border border-black  w-[600px] h-[500px] ml-5 overflow-y-scroll">
      <h1 className="font-bold p-2 text-lg">Live</h1>
      <div className="flex flex-col-reverse ">
        {messageData &&
          messageData?.map((m, index) => (
            <Messages key={index} name={m.name} message={m.message} />
          ))}
      </div>
    </div>
  );
};

export default LiveChat;
