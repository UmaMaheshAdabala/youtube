import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addResults } from "../utils/searchResultsSlice";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.searchResults.results);
  // console.log(searchResults);
  const searched = useSelector((store) => store.app.isSearchUsed);

  useEffect(() => {
    getVideoByKey();
  }, [searched]);
  const getVideoByKey = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet+&maxResults=25&q=" +
        searchParams.get("q") +
        "=&key= " +
        process.env.REACT_APP_YOUTUBE_API
    );
    const json = await data.json();
    dispatch(addResults(json.items.slice(1)));
  };

  return (
    <div className="w-[1000px] items-center">
      <div className="">
        {/* {console.log(searchResults)} */}
        {searchResults &&
          searchResults.map((res) => <SearchResults data={res.snippet} />)}
      </div>
    </div>
  );
};

export default SearchPage;
