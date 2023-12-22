import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"
import avalanche from "./images/avalanche.png"
import tdjoe from "./images/traderjoe.png"




const Home: React.FC = () => {




    return (
        <div className="w-full pb-60 relative flex flex-col justify-center items-center" >

            <div className="w-full border-2 relative border-black mt-32 p-2 max-w-[600px]">
                <div className="flex justify-center items-center text-3xl  font-bold bg-amber-500 py-1">
                    <p className="text-center">Show me your $BOBS</p>
                </div>
                <div className="flex justify-center items-center text-3xl mt-2 font-bold bg-amber-500 py-1">
                    <p className="text-center"> on AVALANCHE</p>
                </div>

            </div>


            <div className="w-full  mt-10 p-4 cursor-pointer">

                <a href="https://traderjoexyz.com/avalanche/trade" target="_blank">
                    <div className="flex items-center justify-center gap-4">

                        <img className="h-12 w-12" src={avalanche} alt="" />

                        <p className="text-3xl font-bold">BUY NOW ON</p>

                        <img className="h-12 w-12" src={tdjoe} alt="" />

                    </div>
                </a>

                <div className="w-full text-center font-bold mt-5 text-xs md:text-lg lg:text-xl">
                    <p className="text-lg">Contract address</p>
                    <p className="mt-2 ">0xf5f3216E9fed36F8cCf08D310FEc6FBf7f06200f</p>
                </div>




            </div>




            <div className="w-full border-2 border-black  p-2 mt-10 lg:text-xl ">
                <div className="bg-amber-500 w-full p-4 lg:px-20 ">
                    <p className="text-center font-semibold">
                        Embracing the spirit of community hilarity, $BOBS is more than just a meme coin on the Avalanche network; it's a digital symphony of laughter and camaraderie. Created to infuse joy into the crypto space, $BOBS stands as a testament to the whimsical fusion of blockchain and meme culture.
                    </p>
                </div>
            </div>


            <div className="w-full  my-10">
                <p className="text-3xl font-bold text-center">TOKENOMICS & DATA</p>

                <div>
                    <div className="w-full text-center font-bold mt-5 text-xs md:text-lg lg:text-xl">
                        <p className="text-lg">Total Supply</p>
                        <p className="mt-2 ">808,580,858,085,000,000,000,000,000,000</p>
                    </div>


                    <div className="w-full text-center font-bold mt-5 text-xs md:text-lg lg:text-xl">
                        <p className="text-lg">Ownership address (renounced)</p>
                        <p className="mt-2 ">0x0000000000000000000000000000000000000000</p>
                        <p className="text-lg mt-2">Check tx <a href="https://snowtrace.io/tx/0x03a4407737f205b56128f7d7ed696665f47e2653d5bf5a14b7322f033e267942?chainId=43114" target="_blank" className="text-amber-600">here</a></p>
                    </div>


                    <div className="w-full text-center font-bold mt-5 text-xs md:text-lg lg:text-xl">
                        <p className="text-lg">Initial liquidity burned</p>
                        <p className="text-lg mt-2">Check tx <a href="https://snowtrace.io/tx/0x6e4d0b7dc40775ad58b8e421c49cb21605c308f7ba40dcd9b51de703c657e546" target="_blank" className="text-amber-600">here</a></p>

                    </div>





                </div>
            </div>


            <div className="w-full flex flex-col justify-center items-center my-10 gap-5 mb-20 sm:mb-0">

                <p className="font-bold text-3xl text-center"> JOIN US ON SOCIAL MEDIA</p>

                <div className="w-full flex justify-center items-center gap-10 ">



                    <a href="https://twitter.com/BOBSonAVAX" target="_blank">
                        <div className="w-20 h-20 bg-black rounded-sm">
                            <img src={twitter}></img>
                        </div>
                    </a>


                    <a href="https://t.me/avax_bobs" target="_blank">
                        <div className="w-20 h-20 bg-black rounded-sm p-2">
                            <img src={tg}></img>
                        </div>
                    </a>


                </div>

            </div>


            <div className="w-full absolute bottom-0 border-2 border-black p-2 lg:text-xl text-center" >
                <div className="bg-amber-500 w-full py-4 px-4 md:px-10 lg:px-20 md:py-5 lg:py-10">

                    <p className="font-semibold">

                        Disclaimer: $BOBS is a decentralized meme coin on the Avalanche network created for entertainment purposes. It does not constitute financial advice, and participation in $BOBS is at the user's own risk. Please conduct thorough research before engaging, as crypto investments carry inherent risks. Always exercise caution and discretion in the volatile crypto space.

                    </p>

                </div>
            </div>


        </div>
    )
}



export default Home;