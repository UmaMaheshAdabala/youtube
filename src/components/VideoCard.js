import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img alt="Thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2 text-sm">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
