import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../Api/api";
import { secand } from "../Admin";
import LeftSide from "./Shared/LeftSide";
import SearchResultVideoCard from "./SearchResulteVideoCard";

const SsearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const setLoading = useContext(secand);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
    console.log(searchQuery)
  }, [searchQuery]);

  const fetchSearchResults = () => {


    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      setResult(res?.contents);
      setLoading(false);
    });
  };



  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftSide />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return (
              <SearchResultVideoCard
                key={video.videoId}
                video={video}
              />
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default SsearchResult;













