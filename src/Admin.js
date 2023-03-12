import { useState, useEffect, createContext, useRef } from "react";
import { fetchDataFromApi } from "./Api/api";
import MasterComponent from "./Component/MasterComponent";


const first = createContext();
const secand = createContext();
const third = createContext();
const four = createContext();
const five = createContext();
const six = createContext();
const seven = createContext();
const eight = createContext();



const Admin = () => {

    const [Loader, Setloader] = useState(false);
    const [serachresult, setsearchresult] = useState(false);
    const [selectcategory, setselectcategory] = useState("New");
    const [mobile, setmobile] = useState(false);


    useEffect(() => {
        FatchSelectedCategoryDAta(selectcategory);
        console.log("first")

    }, [selectcategory])


    const FatchSelectedCategoryDAta = (query) => {
        Setloader(true);
        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            setsearchresult(res.contents);
            Setloader(false);
        }).catch((eror) => {
            console.log(eror);
            console.log("no")
        })
    }

    return (
        <>
            <first.Provider value={Loader} >
                <secand.Provider value={Setloader} >
                    <third.Provider value={serachresult} >
                        <four.Provider value={setsearchresult} >
                            <five.Provider value={selectcategory} >
                                <six.Provider value={setselectcategory} >
                                    <seven.Provider value={mobile}  >
                                        <eight.Provider value={setmobile}>

                                            <MasterComponent />

                                        </eight.Provider>
                                    </seven.Provider>
                                </six.Provider>
                            </five.Provider>
                        </four.Provider>
                    </third.Provider>
                </secand.Provider>
            </first.Provider>
        </>
    )
}

export default Admin;
export { first, secand, third, four, five, six, seven, eight, }; 