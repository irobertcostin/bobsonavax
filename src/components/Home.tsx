import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"
import avalanche from "./images/avalanche.png"
import tdjoe from "./images/traderjoe.png"
import Api from "../service/Api"
import { useEffect, useState } from "react"

import dexscreener from "./images/dexscreener.jpg"
import PairDexscreener from "./interfaces/PairInterface"


// components
import TypicalComponent from "./home-components/TypicalComponent"
import Roadmap from "./home-components/Roadmap"
import Bobsnomics from "./home-components/Bobsnomics"
import BuyComponent from "./home-components/BuyComponent"
import Footer from "./Footer"
import Statistics from "./home-components/Statistics"


const Home: React.FC = () => {

    let [data, setData] = useState<PairDexscreener>();
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
        <div className="w-full relative flex flex-col justify-center items-center" >



            <TypicalComponent />

            <div className="w-full lg:text-xl quick-desc">
                <div className="bg-black w-full p-4">
                    <p className="text-center bg-[#ee8c3a] rounded-lg shadow-xl text-white md:text-lg lg:text-xl font-semibold px-4 py-10 lg:px-20 ">
                        Embracing the spirit of community hilarity, $BOBS is more than just a meme coin on the Avalanche network; it's a digital symphony of laughter and camaraderie. Created to infuse joy into the crypto space, $BOBS stands as a testament to the whimsical fusion of blockchain and meme culture.
                    </p>
                </div>
            </div>
            <Roadmap />
            {/* <Bobsnomics /> */}
            <BuyComponent />
            <Statistics data={data} />
            <Footer />
        </div>
    )
}



export default Home;
