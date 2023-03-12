import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../Constant";
import LeftNavMenuItem from "../LeftNavMenuItem";
import { five, six } from "../../Admin";
import { seven } from "../../Admin";
import React from "react";




const LeftSide = () => {
    const refs = useRef()
    const mobile = useContext(seven);
    const SelectedCategory = useContext(five);
    const setSelectedCategory = useContext(six);
    const Mobilemenu = useContext(seven);
    const navigate = useNavigate();



    const Handler = (name, type) => {
        if (type === "menu") {
            return false;
        } else if (type === "home") {
            setSelectedCategory(name)
        } else if (type === "category") {
            setSelectedCategory(name)
        } else {
            setSelectedCategory(name)
        }


    }


    useEffect(() => {
        if (mobile) {
            refs.current.style.display = 'block';
            
        } else {
            refs.current.style.display = 'none';
        }

    })


    return (
        <section className={`w-[240px] sticky  bg-black h-full overfloe-y-auto py-2 inset-0  z-10 translate-x-[-240] md:translate-x-0 transition-all hidex `} ref={refs}  >
            <div className="flex px-5 flex-col " >
                {
                    categories.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <LeftNavMenuItem
                                    key={index}
                                    text={item.text === "home" ? "Home" : item.name}
                                    icon={item.icon}
                                    action={() => { Handler(item.name, item.type); navigate("/") }}
                                    className={`${SelectedCategory === item.name ? "bg-white/[0.2]" : ""}`}

                                />
                                {item.divider && (
                                    <hr className="my-5 border-white/[0.2]" />
                                )}
                            </React.Fragment>
                        )
                    })
                }


                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]"  ></div>
                <p className="text-white" > YouTube Clone</p>
            </div>
        </section>
    )
}

export default LeftSide;