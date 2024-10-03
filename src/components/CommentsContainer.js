import React, { useEffect } from "react";
import { USER_LOGO } from "../utils/constants";

const commentData = [
  {
    name: "Umesh Adabala",
    text: "This is a youtube-clone",
    replies: [],
  },
  {
    name: "Umesh Adabala",
    text: "This is a youtube-clone",
    replies: [
      {
        name: "Umesh Adabala",
        text: "This is a youtube-clone",
        replies: [
          {
            name: "Umesh Adabala",
            text: "This is a youtube-clone",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Umesh Adabala",
    text: "This is a youtube-clone",
    replies: [
      {
        name: "Umesh Adabala",
        text: "This is a youtube-clone",
        replies: [
          {
            name: "Umesh Adabala",
            text: "This is a youtube-clone",
            replies: [
              {
                name: "Umesh Adabala",
                text: "This is a youtube-clone",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Umesh Adabala",
    text: "This is a youtube-clone",
    replies: [],
  },
  {
    name: "Umesh Adabala",
    text: "This is a youtube-clone",
    replies: [],
  },
  {
    name: "Umesh Adabala",
    text: "This is a youtube-clone",
    replies: [
      {
        name: "Umesh Adabala",
        text: "This is a youtube-clone",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex shadow-lg rounded-lg p-2 m-2 bg-gray-100">
      <div>
        <img alt="user" src={USER_LOGO} className="w-8 h-8 rounded-lg" />
      </div>
      <div>
        <p className="font-bold">{data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="m-2 p-2  border-l-black">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="w-[1/2]">
      <div className="font-bold text-lg">Comments:</div>
      <div>
        <CommentList comments={commentData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
