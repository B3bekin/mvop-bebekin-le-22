import Picture from "../public/logos.svg"
import { Link } from "react-router-dom"
//books:
import Yellow from "../public/bks10.jpg"
import Red from "../public/bks5.jpg"
import Blue from "../public/bks4.jpg"
//another books:
import OpenedWhite from "../public/bks6.jpg"
import StandingWhite from "../public/bks2.jpg"
import LayingWhite from "../public/bks7.jpg"

function Denicky() {

    return (
        <div>
            <div>

                <div className="">

                    <div className="">
                        <div className="bg-orange-500 flex justify-between px-14">
                            <div className="flex flexbox flex-col-reverse pb-1">
                                <nav className="flex gap-10 text-white font-semibold text-2xl">
                                    <ul><Link to="/novinky">Novinky</Link></ul>
                                    <ul><Link to="/aktuality">Aktuality</Link></ul>
                                    <ul className="underline"><Link to="/denicky">Deníčky</Link></ul>
                                    <ul><Link to="/faq">FAQ</Link></ul>
                                </nav>
                            </div>
                            <div className="pr-0">
                                <Link to="/home"><img src={Picture} alt="logo" className="w-[100px]" /></Link>
                            </div>
                        </div>

                    </div>

                </div>

                <div className=" bg-orange-50 min-h-screen">
                    <div className="px-28 ">
                        <div className="grid grid-cols-9 gap-6 bg-slate-200">
                            {/* <div className="col-start-1 col-end-2 bg-cyan-800"/> */}
                            <div className="col-start-1 col-end-3">
                                <div className="grid grid-cols-2">
                                    <div className="bg-gradient-to-r from-orange-50 to-white grid grid-rows-3" >
                                        <div className="pt-20">
                                            <div className="bg-red-800 text-center text-white text-xl rounded-full">
                                                V červené barvě
                                            </div>
                                        </div>
                                        <div className="pt-20">
                                            <div className="bg-yellow-500 text-center text-white text-xl rounded-full">
                                                Ve žluté barvě
                                            </div>
                                        </div>
                                        <div className="pt-20">
                                            <div className="bg-blue-500 text-center text-white text-xl rounded-full">
                                                V modré barvě
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="grid grid-cols-1 grid-rows-7 gap-3 mx-auto bg-white">
                                            <img src={Red} alt="červená" className="" />
                                            <img src={Yellow} alt="žlutá" className="" />
                                            <img src={Blue} alt="modrá" className="" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-start-3 col-end-6 pt-24 ">
                                <div className="grid grid-cols-4 ">
                                    <div className="col-start-1 col-end-4">
                                        <img src={OpenedWhite} alt="" />
                                    </div>
                                    <div className="col-start-4 col-end-5 ">
                                        <img src={LayingWhite} alt="" />
                                        <img src={StandingWhite} alt="" />
                                    </div>

                                </div>

                            </div>



                            <div className="col-start-6 col-end-8 pt-28">
                                <div className="bg-blue-50 px-5 py-auto min-h-full rounded-2xl">
                                    <div className="text-3xl pt-3">Naše deníky</div>
                                    <div className="pt-1 font-">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab repellendus laudantium!
                                    </div>
                                    <div className="pt-2">
                                        Inventore laudantium ullam maiores quae autem qui cum quidem? Harum architecto ab perspiciatis ad odio similique perferendis sequi corporis assumenda.
                                    </div>
                                    <div className="pt-3">
                                        Frugit perferendis fugiat deleniti. Reiciendis atque dignissimos deleniti maiores amet blanditiis velit tempora a impedit!
                                    </div>
                                </div>
                            </div>

                            <div className="col-start-8 col-end-10">
                                <div className="bg-cyan-800 px-7 py-10 min-h-full">
                                    <div className="text-xl">
                                        <div className="font-bold text-3xl text-white pl-6">Kategorie</div>

                                        <div className="pl-2 pt-3 text-white">
                                            ▫️ Beletrie <br />
                                            ▫️ Romány <br />
                                            ▫️ Naučná literatura <br />
                                            ▫️ Detektivky <br />
                                            ▫️ Sci-fi <br />
                                            ▫️ Fantasy <br />
                                            ▫️ Pro nejmenší <br />
                                            ▫️ Romány <br />
                                            ▫️ Naučná literatura <br />
                                        </div>
                                        <div className="pl-11 pt-1 text-white underline">+ Více možností</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    )

}

export default Denicky