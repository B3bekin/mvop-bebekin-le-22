import Picture from "../public/logos.svg"
import Bookshelf from "../public/the-main-bookshelf.png"
// import Picture from './pth/logos.png'
// import { ReactComponent as Picture } from './pth/logos.svg';

function Header() {
    return (
        <div className="">
            <div className="bg-orange-200">
                <img src={Picture} alt="logo" className="w-[100px]" />
            </div>

            <div className="bg-orange-500 flex text-center">
                <nav className="flex flex-row gap-10 text-white font-bold">
                    <ul>Novinky</ul>
                    <ul>Aktuality</ul>
                    <ul>Galerie</ul>
                    <ul>FAQ</ul>
                </nav>
            </div>

            <div className="relative min-h-[80vh] min-w-full">

                <img src={Bookshelf} alt="knihy, spoustu knih" className="min-w-full h-full object-cover bg-gradient-to-b from-inherit to-black absolute top-0 left-0" />

                <div className="absolute top-0 left-0 bg-black opacity-50 h-full w-full z-10" />

                {/* <div className="bg-gradient-to-r from-green-400 via-white to-orange-400 text-white">awUJDG</div>
                <div className="bg-gradient-to-r from-orange-400 via-white to-green-400 text-white">asdsd</div>
                <div className="bg-gradient-to-r from-green-400 via-white to-orange-400 text-white">dsdasdsf</div>  */}

                <div>
                    Lorem
                </div>
                
            </div>
        </div>
    )

}

export default Header