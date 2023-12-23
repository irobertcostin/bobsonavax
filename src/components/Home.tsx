import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"
import avalanche from "./images/avalanche.png"
import tdjoe from "./images/traderjoe.png"
import Api from "../service/Api"
import { useEffect, useState } from "react"
import { TypeAnimation } from 'react-type-animation';
import dexscreener from "./images/dexscreener.jpg"


interface Pair {
    chainId: string;
    dexId: string;
    url: string;
    pairAddress: string;
    baseToken: {
        address: string;
        name: string;
        symbol: string;
    };
    quoteToken: {
        symbol: string;
    };
    priceNative: string;
    priceUsd?: string;
    txns: {
        m5: {
            buys: number;
            sells: number;
        };
        h1: {
            buys: number;
            sells: number;
        };
        h6: {
            buys: number;
            sells: number;
        };
        h24: {
            buys: number;
            sells: number;
        };
    };
    volume: {
        m5: number;
        h1: number;
        h6: number;
        h24: number;
    };
    priceChange: {
        m5: number;
        h1: number;
        h6: number;
        h24: number;
    };
    liquidity?: {
        usd?: number;
        base: number;
        quote: number;
    };
    fdv?: number;
    pairCreatedAt?: number;
}




const Home: React.FC = () => {

    let [data, setData] = useState<Pair>();
    let [launchDate, setLaunchDate] = useState(String);

    useEffect(() => {
        let getData = async () => {
            let api = new Api();
            const data = await api.fetchDexScreener();
            setData(data.pair)
            const date = new Date(data.pair.pairCreatedAt)
            setLaunchDate(date.toDateString());
        }
        if (!data) {
            getData()
        }

    }, [data])

    return (
        <div className="w-full pb-60 relative flex flex-col justify-center items-center" >


            <div className="w-full relative bg-black h-52 pt-10 px-4 text-center flex justify-center items-start font-semibold sm:items-center ">
                <TypeAnimation

                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Show me your $BOBS',
                        1000,
                        'Show me your $BOBS and forget about COQs',
                        1000,
                        'Show me your $BOBS bigger than the BONKs',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
                    repeat={Infinity}
                />

                <div className="absolute -bottom-10 right-5 rounded-full shadow-2xl md:right-10 md:-bottom-12 lg:right-40">
                    <img className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32" src={avalanche} alt="AVAX Logo" />
                </div>
            </div>



            <div className="w-full flex flex-col justify-center items-start gap-10 my-16 lg:flex-row lg:my-32">

                <div className=" w-full flex flex-col justify-center items-center gap-2">
                    <p className="text-2xl md:text-3xl font-bold">808,580,858,085</p>
                    <p>Total supply</p>
                </div>

                <div className=" w-full flex flex-col justify-center items-center gap-2">
                    <p className="text-2xl md:text-3xl font-bold ">$ {data?.volume?.h24.toLocaleString()}</p>
                    <p className="">24 hours volume traded</p>
                </div>


                <div className=" w-full flex flex-col justify-center items-center gap-2">
                    <p className="text-2xl md:text-3xl font-bold">$ {data?.fdv?.toLocaleString()}</p>
                    <p>Market Cap</p>
                </div>


            </div>







            <div className="w-full lg:text-xl ">
                <div className="bg-amber-500 w-full px-4 py-10 lg:px-20 ">
                    <p className="text-center font-semibold">
                        Embracing the spirit of community hilarity, $BOBS is more than just a meme coin on the Avalanche network; it's a digital symphony of laughter and camaraderie. Created to infuse joy into the crypto space, $BOBS stands as a testament to the whimsical fusion of blockchain and meme culture.
                    </p>
                </div>
            </div>


            <div className="bg-black w-full py-10 relative px-4 pb-20 md:px-20 lg:px-[30%] md:text-lg md:font-semibold">
                <p className="text-white text-center text-xl font-bold md:text-3xl">$BOBSMAP</p>

                <div className="absolute h-[80%] bottom-5 right-[50%] border-2 border-white">
                </div>

                <div className=" w-full text-white mt-10 md:mt-20 lg:flex lg:gap-2">

                    <p>Launch date:</p>
                    <p>{launchDate}</p>
                </div>

                <div className=" w-full text-white text-end mt-4 md:mt-10 lg:flex lg:gap-2 lg:justify-end">

                    <p>Social media </p>
                    <p>channels</p>
                </div>


                <div className=" w-full text-white text-start mt-4 md:mt-10 lg:flex lg:gap-2">
                    <p>Dexscreener </p>
                    <p>Dextools</p>
                </div>

                <div className=" w-full text-white text-end mt-4 md:mt-10 lg:flex lg:gap-2 lg:justify-end">

                    <p>Ownership </p>
                    <p>renounced</p>
                </div>


                <div className=" w-full text-white text-start mt-4 md:mt-10 lg:flex lg:gap-2 ">

                    <p>Initial liquidity </p>
                    <p>burned</p>
                </div>

                <div className=" w-full text-white text-end mt-4 md:mt-10 lg:flex lg:gap-2 lg:justify-end">
                    <p>Website </p>
                    <p>launch</p>
                </div>


                <div className=" w-full text-white text-start mt-4 md:mt-10 lg:flex lg:gap-2">
                    <p>1000 X</p>
                    <p>followers</p>
                </div>

                <div className=" w-full text-white text-end mt-4 md:mt-10 lg:flex lg:gap-2 lg:justify-end">
                    <p>Website</p>
                    <p>revamp</p>
                </div>


                <div className=" w-full text-white text-start mt-4 md:mt-10 lg:flex lg:gap-2">
                    <p>Coming</p>
                    <p>soon...</p>
                </div>



            </div>


            <div className="w-full bg-amber-500 py-10">
                <p className="text-3xl font-bold text-center">$BOBSNOMICS</p>

                <div>
                    <p className="text-center text-2xl mt-10 font-bold">Fair Launch</p>

                    <div className="w-full flex flex-col items-center mt-5 text-xl font-bold md:grid md:grid-cols-4 md:text-center lg:text-2xl">

                        <p>.8085% Wallet Buy Limit</p>
                        <p>No Team Allocation</p>
                        <p>No Presale</p>
                        <p>No Tax</p>

                    </div>
                </div>


                <div className="md:flex md:justify-center md:px-40 lg:px-80   md:mt-10">
                    <div className="w-full text-center font-bold mt-5 text-xs md:text-lg lg:text-xl">
                        <p className="text-lg">Ownership renounced</p>
                        <p className="text-lg mt-2">Check tx <a href="https://snowtrace.io/tx/0x03a4407737f205b56128f7d7ed696665f47e2653d5bf5a14b7322f033e267942?chainId=43114" target="_blank" rel="noreferrer" className="text-white">here</a></p>
                    </div>


                    <div className="w-full text-center font-bold mt-5 text-xs md:text-lg lg:text-xl">
                        <p className="text-lg">Initial liquidity burned</p>
                        <p className="text-lg mt-2">Check tx <a href="https://snowtrace.io/tx/0x6e4d0b7dc40775ad58b8e421c49cb21605c308f7ba40dcd9b51de703c657e546" target="_blank" rel="noreferrer" className="text-white">here</a></p>
                    </div>



                </div>
            </div>

            <div className="w-full  mt-10 p-4 cursor-pointer">
                <a href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0xf5f3216E9fed36F8cCf08D310FEc6FBf7f06200f" target="_blank" rel="noreferrer">
                    <div className="flex items-center justify-center gap-4">
                        <img className="h-12 w-12" src={avalanche} alt="AVAX Logo" />
                        <p className="text-3xl font-bold md:text-4xl">BUY ON</p>
                        <img className="h-12 w-12" src={tdjoe} alt="Trader Joe Logo" />
                    </div>
                </a>
                <div className="w-full text-center font-bold mt-5 text-xs lg:text-2xl">
                    <p className="text-lg md:text-xl lg:text-2xl">Contract address</p>
                    <p className="mt-2 md:text-xl lg:text-2xl">0xf5f3216E9fed36F8cCf08D310FEc6FBf7f06200f</p>
                </div>
            </div>


            <div className="w-full flex flex-col justify-center items-center my-10 gap-5 mb-32 sm:mb-16">
                <p className="font-bold text-xl md:text-3xl text-center">SOCIAL MEDIA AND WEB PRESENCE</p>
                <div className="w-full flex justify-center items-center gap-10 ">
                    <a href="https://twitter.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-sm">
                            <img src={twitter} alt="Twitter Logo"></img>
                        </div>
                    </a>
                    <a href="https://t.me/avax_bobs" target="_blank" rel="noreferrer">
                        <div className="w-12 h-12  md:w-16 md:h-16 bg-black rounded-sm p-2">
                            <img src={tg} alt="Telegram Logo"></img>
                        </div>
                    </a>



                    <a href="https://dexscreener.com/avalanche/0x8d59f25a2a31f80d12dda8d6cee125684ea1d019" target="_blank" rel="noreferrer">
                        <div className="w-12 h-12  md:w-16 md:h-16 bg-black rounded-sm ">
                            <img src={dexscreener} alt="Dexscreener Logo"></img>
                        </div>
                    </a>

                </div>
            </div>


            <div className="w-full absolute bottom-0 lg:text-xl text-center" >
                <div className="bg-amber-500 w-full py-4 px-4 md:px-10 lg:px-20 md:py-5 lg:py-10">

                    <p className="font-semibold mb-4">
                        For any other enquiries: admin@bobsonavax.com
                    </p>


                    <p className="font-semibold">

                        Disclaimer: $BOBS is a decentralized meme coin on the Avalanche network created for entertainment purposes. It does not constitute financial advice, and participation in $BOBS is at the user's own risk. Please conduct thorough research before engaging, as crypto investments carry inherent risks. Always exercise caution and discretion in the volatile crypto space.

                    </p>


                </div>
            </div>


        </div>
    )
}



export default Home;
