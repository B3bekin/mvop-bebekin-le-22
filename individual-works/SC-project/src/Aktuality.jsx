import Picture from "../public/logos.svg"
import PlaceMark from "../public/placeholder-filled-point.png"
import TimeFlies from "../public/time-left.png"
import Exchange from "../public/exchange.png"
import Building from "../public/pobocka.jpg"

function Aktuality() {
    return (
        <div>

            <div className="">

                <div>
                    <div className="bg-orange-500 flex justify-between px-14">
                        <div className="flex flexbox flex-col-reverse pb-1">
                            <nav className="flex gap-10 text-white font-semibold text-2xl">
                                <ul>Novinky</ul>
                                <ul className="underline hover:underline-offset-4">Aktuality</ul>
                                <ul>Deníčky</ul>
                                <ul>FAQ</ul>
                            </nav>
                        </div>
                        <div className="pr-0">
                            <img src={Picture} alt="logo" className="w-[100px]" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="pt-5 bg-orange-50 min-h-screen">
                <div className="px-28 ">
                    <div className="grid grid-cols-9 gap-6 ">


                        <div className="col-start-1 grid  gap-5 col-end-6">

                            <div className=" bg-orange-300 bg-">
                                <div className="bg-orange-200 px-7 py-9 ">
                                    <div className="flex">
                                        <div className="font-semibold text-2xl pl-6">Nová pobočka </div>
                                        <img src={PlaceMark} alt="místo" className="w-[35px] ml-2" />
                                    </div>
                                    <div className="pl-4">Na tramvajové zastávce Bratří syknů, jsme v neděli 12.3.2024 otevřeli novou pobočku</div>
                                </div>
                                <img src={Building} alt="budova" className=" mx-auto w-[445px] my-auto" />
                            </div>


                            <div className="bg-orange-200 px-7 py-9">
                                <div className="flex">
                                    <div className="font-semibold text-2xl pl-6">Změna Otevírací doby</div>
                                    <img src={TimeFlies} alt="čas" className="w-[35px] ml-3" />
                                </div>
                                <div className="pl-4">Máme pro Vás dobrou zprávu. Od nového roku naše všechny výdejní místa fungují nonstop</div>
                            </div>

                            <div className="bg-orange-200 px-7 py-9">
                                <div className="flex">
                                    <div className="font-semibold text-2xl pl-6">Nová možnost Výměny</div>
                                    <img src={Exchange} alt="výměna" className="w-[35px] ml-4" />
                                </div>
                                <div className="pl-4">Chystáme pro Vás velkou změnu. Bude zavedena možnost výměny knih. Volný obchod pro všechny! </div>
                            </div>

                        </div>

                        <div className="col-start-6 col-end-8 ">

                            <div className="bg-orange-200 px-7 py-10">
                                <div className="text-xl">
                                    <div className="font-bold text-3xl pl-6">Aktuality</div>

                                    <div className="pl-2 ">
                                        - Nová pobočka <br />
                                        - Změna otevírací doby <br />
                                        - Nová možmost prodeje</div>
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
    )

}

export default Aktuality