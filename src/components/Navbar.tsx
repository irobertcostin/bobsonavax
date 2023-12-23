import logo from "../components/images/bobs.jpg"
import dexscreener from "./images/dexscreener.jpg"
import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"


const Navbar: React.FC = () => {


    return (
        <div className="w-full relative  h-24 md:h-32 bg-amber-500 flex justify-end items-center p-4 md:px-10 lg:px-30">


            <div className=" hidden justify-center items-center md:flex  gap-4 mr-4">


                <a href="https://twitter.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                    <div className="w-14 h-14 border-2 border-white bg-black p-1 ">
                        <img src={twitter} alt="Twitter Logo"></img>
                    </div>
                </a>


                <a href="https://t.me/avax_bobs" target="_blank" rel="noreferrer">
                    <div className="w-14 h-14 border-2 border-white bg-black p-1">
                        <img src={tg} alt="Telegram Logo"></img>
                    </div>
                </a>

                <a href="https://dexscreener.com/avalanche/0x8d59f25a2a31f80d12dda8d6cee125684ea1d019" target="_blank" rel="noreferrer">
                    <div className="w-14 h-14   bg-black rounded-sm border-2 border-white">
                        <img src={dexscreener} alt="Dexscreener Logo"></img>
                    </div>
                </a>
            </div>

            <a href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0xf5f3216E9fed36F8cCf08D310FEc6FBf7f06200f" target="_blank" rel="noreferrer">
                <div className="border-2 ">
                    <button className="bg-black text-white p-3 font-semibold text-sm md:text-lg  ease-out duration-300 hover:-translate-x-1.5 hover:-translate-y-1.5">BUY SOME $BOBS</button>
                </div>
            </a>


            <img src={logo} alt="BOBS Logo" className="absolute cursor-pointer z-50 w-20 h-20 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-full border-2 border-black -bottom-10 md:-bottom-16 left-10 md:left-24 lg:left-60 lg:-bottom-24 hover:rotate-90 ease-in-out duration-300"></img>



        </div>
    )
}


export default Navbar;
