import { useContext, useRef, useState  } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose, cgClose } from "react-icons/cg";
import { first, secand, seven, eight } from "../Admin";
import Loaderx from "./Shared/Loader";





const Header = () => {
  const Loader = useContext(first);
  const setloader = useContext(secand);
  const mobile = useContext(seven);
  const setmobile = useContext(eight);
  const navigate = useNavigate();
  const [searchQuery, setsearchQuery] = useState("");
 


  const SearchQueryHandler = (e) => {
    if ((e?.key === "Enter" || e === "searchbutton") && searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  }

  const MobileMenuToglle = () => {
    setmobile(!mobile)
  };

  const { pathname } = useLocation();
  const pagename = pathname?.split("/")?.filter(Boolean)?.[0]



  return (
    <header className='sticky top-0 z-10 flex flex-row items-center justify-between px-4  bg-black h-14 md:px-5 '>

      {Loader && <Loaderx />}
      <div className="flex  h-5 items-center">
        {pagename !== "video" && (
          <div className="flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] " onClick={MobileMenuToglle}  >
            {mobile ? (<CgClose className="text-white text-xl"   />) : (<SlMenu className="text-white text-xl"   />)}


          </div>
        )}

        <Link to="/" className="flex h-5 item-center" >
          <img src="img/yt-logo.png" alt="logo-image" className="h-full hidden md:block dark:md:block" />
          <img src="img/yt-logo-mobile.png" alt="logo-image" className="h-full md:hidden dark:md:block" />
        </Link>


      </div>

      <div className="group flex item-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0  "  >


          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>


          <input type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => { setsearchQuery(e.target.value) }}
            onKeyUp={SearchQueryHandler}
            value={searchQuery}
          />

        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]" onClick={SearchQueryHandler}  >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
        </div>
      </div>

    </header>
  )
}

export default Header;   