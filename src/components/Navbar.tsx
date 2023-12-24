import logo from "../components/images/bobs.jpg"
import dexscreener from "./images/dexscreener.jpg"
import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"


const Navbar: React.FC = () => {


    return (
        <div className="w-full relative  h-20 md:h-32 bg-[#ee8c3a] flex justify-between items-center p-4 md:px-10 lg:px-30">

            <img src={logo} alt="BOBS Logo" className=" cursor-pointer shadow-2xlr w-14 h-14 md:h-24 md:w-24 rounded-full border-2 border-black -bottom-10 md:-bottom-16 left-10 md:left-24 lg:left-60 lg:-bottom-24 hover:rotate-90 ease-in-out duration-300"></img>


            <div className="flex w-full items-center justify-end">
                <div className=" hidden  justify-center items-center md:flex  gap-4 mr-4">


                    <a href="https://twitter.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                        <div className="w-10 h-10 rounded-md  bg-black p-1 ">
                            <img src={twitter} alt="Twitter Logo"></img>
                        </div>
                    </a>


                    <a href="https://t.me/avax_bobs" target="_blank" rel="noreferrer">
                        <div className="w-10 h-10 rounded-md  bg-black p-1">
                            <img src={tg} alt="Telegram Logo"></img>
                        </div>
                    </a>

                    <a href="https://dexscreener.com/avalanche/0x8d59f25a2a31f80d12dda8d6cee125684ea1d019" target="_blank" rel="noreferrer" >
                        <div className="w-10 h-10 rounded-md   bg-black ">
                            <img src={dexscreener} className="rounded-md" alt="Dexscreener Logo"></img>
                        </div>
                    </a>
                </div>

                <div className=" ">
                    <button className="bg-black rounded-md  text-white px-3 py-2 hover:bg-slate-800 ease-in-out duration-300">Connect wallet</button>
                </div>
            </div>





        </div>
    )
}


export default Navbar;
