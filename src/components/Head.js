import React, { useEffect, useState } from "react";
import {
  LOGO_URL,
  MENU_LOGO,
  USER_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { searched, toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const handleSearchClick = () => {
    dispatch(searched());
  };
  console.log("Head Render");
  useEffect(() => {
    // Concept of debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
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
          className="w-[60%] border border-gray-400 rounded-l-3xl p-1 px-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 rounded-r-3xl p-1">
          Search
        </button>
        {suggestions.length > 0 && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadou-lg rounded-lg border border-gray-300">
            <ul>
              {suggestions.map((s, index) => (
                <li key={index} onClick={handleSearchClick}>
                  <Link to={"/search?q=" + s}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img src={USER_LOGO} alt="USER" className="h-8" />
      </div>
    </div>
  );
};

export default Head;
