import { useContext, useEffect, useState } from "react";
import { first, third } from "../Admin";
import LeftSide from "./Shared/LeftSide";
import VideoCard from "./VideoCard";



const Feed = () => {
  const Loader = useContext(first);
  const SearchResulte = useContext(third);
  const [sir, setsir] = useState([]);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
   
  },[])


  return (
    <section className='flex justify-start relative   h-[calc(100%-56px)] ' >
      <LeftSide />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!Loader && Array.isArray(SearchResulte) && SearchResulte.map((item, ind) => {
            if(item.type !== "video")return false;
            return (
              <>
                <VideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Feed