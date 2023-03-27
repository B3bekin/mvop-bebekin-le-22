import Picture from "../public/logos.svg"
import { Link } from "react-router-dom"

import Anti1 from "../public/anti-1.png"
import Anti2 from "../public/anti-2.png"
import Anti3 from "../public/anti-3.png"

function News() {

    return (
        <div>
            <div className="">
                <div className="bg-orange-500 flex justify-between px-14">
                    <div className="flex flexbox flex-col-reverse pb-1">
                        <nav className="flex gap-10 text-white font-semibold text-2xl">

                            <ul className="underline"><Link to="/novinky">Novinky</Link></ul>
                            <ul><Link to="/aktuality">Aktuality</Link></ul>
                            <ul><Link to="/denicky">Deníčky</Link></ul>
                            <ul><Link to="/faq">FAQ</Link></ul>
                        </nav>
                    </div>
                    <div className="pr-0">
                        <Link to="/home"><img src={Picture} alt="logo" className="w-[100px]" /></Link>
                    </div>
                </div>

            </div>
            <div className="px-28 min-h-screen bg-orange-200">

                <div className="grid grid-rows-4">

                    <div className="row-start-1 row-end-2 bg-gradient-to-b from-orange-300 md:to-white">
                       <div className="flex justify-center">
                            <div className="bg-gray-300 font-semibold rounded text-3xl p-5 mt-20">
                                Nejvetší aukce  
                            </div>
                       </div>
                    </div>

                    <div className="row-start-2 row-end-4">
                        <div className="grid grid-cols-3 bg-white">
                            <div className="col-start-1 col-end-2">
                                <div className="px-5 py-5">
                                    <img src={Anti1} alt="" />
                                </div>
                            </div>
                            <div className="col-start-2 col-end-3">
                                <div className="px-5 py-5">
                                    <img src={Anti2} alt="" />
                                </div>
                            </div>
                            <div className="col-start-3 col-end-4">
                                <div className="px-5 py-5">
                                    <img src={Anti3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row-start-4 row-end-5  bg-gradient-to-t from-orange-300 md:to-white" />
                </div>






            </div>
        </div>
    )
}

export default News