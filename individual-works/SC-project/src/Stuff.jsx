import Picture from "../src/public/logos.svg"
import { Link } from "react-router-dom"
import Hammer from "../src/public/shhh-hammer.png"
import Holmes from "../src/public/shhh-home.png"
import Coins from "../src/public/shhh-coins.png"
import BooksIcon from "../src/public/shhh-book.png"

function Stuff() {

    return (
        <div>
            <div className="">

                <div>
                    <div className="bg-orange-500 flex justify-between px-14">
                        <div className="flex flexbox flex-col-reverse pb-1">
                            <nav className="flex gap-10 text-white font-semibold text-2xl">
                                <ul><Link to="/novinky">Novinky</Link></ul>
                                <ul><Link to="/aktuality">Aktuality</Link></ul>
                                <ul><Link to="/denicky">Deníčky</Link></ul>
                                <ul><Link to="/denicky">FAQ</Link></ul>
                                <ul className="underline"><Link to="/faq">🤫</Link></ul>
                            </nav>
                        </div>
                        <div className="pr-0">
                            <Link to="/home"><img src={Picture} alt="logo" className="w-[100px]" /></Link>
                        </div>
                    </div>

                </div>

            </div>
            <div className=" bg-orange-50 min-h-screen">
                <div className="px-28 pt-48">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-4 gap-20 ">
                            <div>
                                <div className="flex justify-center bg-gradient-to-t pt-20 from-white to-green-300 rounded-t-3xl">
                                    <img src={Holmes} alt="" className="w-[200px]" />
                                </div>
                                <div className="flex justify-center bg-black text-white p-5 text-2xl">Domů</div>
                                <div className=" bg-black pt-40"></div>
                            </div>

                            <div>
                                <div className="flex justify-center bg-gradient-to-t pt-20 from-white to-green-300 rounded-t-3xl">
                                    <img src={BooksIcon} alt="" className="w-[150px]" />
                                </div>
                                <div className="flex justify-center bg-black text-white p-5 text-2xl">Knihy</div>
                                <div className=" bg-black pt-64"></div>
                            </div>

                            <div>
                                <div className="flex justify-center bg-gradient-to-t pt-20 from-white to-green-300 rounded-t-3xl">
                                    <img src={Hammer} alt="" className="w-[100px]" />
                                </div>
                                <div className="flex justify-center bg-black text-white p-5 text-2xl">Aukce</div>
                                <div className=" bg-black pt-72"></div>
                            </div>

                            <div>
                                <div className="flex justify-center bg-gradient-to-t pt-20 from-white to-green-300 rounded-t-3xl">
                                    <img src={Coins} alt="" className="w-[50px]" />
                                </div>
                                <div className="flex justify-center bg-black text-white p-5 text-2xl">Dražby</div>
                                <div className=" bg-black pt-80"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stuff