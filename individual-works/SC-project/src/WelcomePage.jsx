import Picture from "../public/logos.svg"
import Bookshelf from "../public/the-main-bookshelf.png"

import { Link } from "react-router-dom"

function Welcome() {

    return (
        <div className="">
            <div className="bg-orange-500 flex flex-col px-14">
                <div className="pr-0 mx-auto">
                    <img src={Picture} alt="logo" className="w-[150px]" />
                </div>

                <div className="flex flexbox flex-col-reverse mx-auto pb-1">
                    <nav className="flex gap-10 text-white font-semibold text-2xl">
                        <ul><Link to="/novinky">Novinky</Link></ul>
                        <ul><Link to="/aktuality">Aktuality</Link></ul>
                        <ul><Link to="/denicky">Deníčky</Link></ul>
                        <ul><Link to="/faq">FAQ</Link></ul>
                    </nav>
                </div>
            </div>

            <div>
                <div className="relative min-h-[80vh] min-w-full">

                    <img src={Bookshelf} alt="knihy, spoustu knih" className="min-w-full h-full object-cover bg-gradient-to-b from-inherit to-black absolute top-0 left-0" />

                    <div className="absolute top-0 left-0 bg-black opacity-50 h-full w-full z-10" >
                        <div className=" text-white">How do I edit this crap</div>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Welcome