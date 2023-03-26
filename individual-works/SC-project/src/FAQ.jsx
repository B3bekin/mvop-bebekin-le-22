import Picture from "../public/logos.svg"
import Guys from "../public/authors.jpg"

function FAQ() {

    return (
        <div>
            <div className="">

                <div>
                    <div className="bg-orange-500 flex justify-between px-14">
                        <div className="flex flexbox flex-col-reverse pb-1">
                            <nav className="flex gap-10 text-white font-semibold text-2xl">
                                <ul>Novinky</ul>
                                <ul>Aktuality</ul>
                                <ul>Deníčky</ul>
                                <ul className="underline hover:underline-offset-4">FAQ</ul>
                            </nav>
                        </div>
                        <div className="pr-0">
                            <img src={Picture} alt="logo" className="w-[100px]" />
                        </div>
                    </div>

                </div>

            </div>
            <div className=" bg-orange-50 min-h-screen">
                <div className="px-28 ">
                    <div className="grid grid-cols-9 gap-6 pt-20">

                        <div className="col-start-3 col-end-5 ">
                            <div className="flex">
                                <img src={Guys} alt="" className="rounded-lg"/>
                            </div>
                        </div>

                        <div className="col-start-6 col-end-8 ">
                            <div className="bg-blue-200 px-5 py-5 my-auto mx-auto rounded-lg ">
                                <div className="font-semibold text-3xl">Frequently Asked Questions</div>
                                <div className="pt-3">
                                    <div className="text-xl underline">What do we do?</div>
                                    <div className="pl-3"> ℹ️ Our company sells old books and makes all types of diaries</div>

                                    <div className="text-xl underline pt-7">How does it work?</div>
                                    <div className="pl-3">ℹ️ We sell and buy old books from people. You, are the one who can trade them for books </div>

                                    <div className="text-xl underline pt-7">Can I trade my books?</div>
                                    <div className="pl-3">ℹ️ Yes, it's your choice to trade or to sell your books</div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ