import Header from "./Header";
import Feed from "./Feed";
import SsearchResult from "./SsearchResult";
import VideoDetails from "./VideoDetails";
import { Route, Routes } from "react-router-dom";



const MasterComponent = () => {
    return (
        <div className="">
            <Header />
            <Routes>
                <Route exact  path="/" element={<Feed />} />
                <Route path="/search/:searchQuery" element={<SsearchResult />} />
                <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
        </div>
    )
}

export default MasterComponent