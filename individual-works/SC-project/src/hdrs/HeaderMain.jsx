function MainOne() {


    return (
        <div>
            <div className="bg-orange-500 flex flex-col px-14">
                <div className="pr-0 mx-auto">
                    <img src={Picture} alt="logo" className="w-[150px]" />
                </div>

                <div className="flex flexbox flex-col-reverse mx-auto pb-1">
                    <nav className="flex gap-10 text-white font-semibold text-2xl">
                        <ul>Novinky</ul>
                        <ul>Aktuality</ul>
                        <ul>Galerie</ul>
                        <ul>FAQ</ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default MainOne