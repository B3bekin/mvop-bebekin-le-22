import {Link} from "react-router-dom"

function Header(){

    return(
        <div>
            <div className="bg-amber-500 w-screen py-4 ">
                <div className="flex flex-row justify-between">
                    <h1>DPP APi</h1>
                    <nav>
                        {/* ul je html tag, použití na list asi */}
                        <ul className=" flex flex-row gap-10">
                            <li><Link to={'home'}>Click me</Link></li>
                            <li><Link to={'about'}>Not me</Link></li>   

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;