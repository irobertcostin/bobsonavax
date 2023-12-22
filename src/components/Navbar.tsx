import logo from "../components/images/bobs.jpg"
import { useNavigate } from "react-router-dom";

import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"


const Navbar: React.FC = () => {


    let navigate = useNavigate();






    return (
        <div className="w-full relative  h-24 md:h-32 bg-amber-500 flex justify-end items-center p-4 md:px-20 lg:px-60">


            {/* <div className="flex justify-center items-center gap-4 mr-4">
                <div className="w-10 h-10 bg-black p-1">
                    <img src={twitter}></img>
                </div>
                <div className="w-10 h-10 bg-black p-1">
                    <img src={tg}></img>
                </div>
            </div> */}

            <a href="https://traderjoexyz.com/avalanche/trade" target="_blank">
                <div className="border-2 ">
                    <button className="bg-black text-white p-3 font-semibold text-sm md:text-lg  ease-out duration-300 hover:-translate-x-2 hover:-translate-y-2">BUY SOME $BOBS</button>
                </div>
            </a>


            <img src={logo} className="absolute cursor-pointer z-50 w-24 h-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-full border-2 border-black -bottom-12 left-10 md:left-24 lg:left-60 lg:-bottom-24 hover:rotate-90 ease-in-out duration-300"></img>



        </div>
    )
}


export default Navbar;