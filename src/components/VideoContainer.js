import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_API);
    const json = await data.json();

    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  console.log("Page Rendered");
  return (
    <div className="flex flex-wrap justify-center">
      {videos &&
        videos.map((video, index) => (
          <Link to={"/watch?v=" + video.id} key={index}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
