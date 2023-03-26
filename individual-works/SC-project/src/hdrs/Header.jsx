function HeaderElse() {


    return (
        <div>
            <div className="bg-orange-500 flex justify-between px-14">
                <div className="flex flexbox flex-col-reverse pb-1">
                    <nav className="flex gap-10 text-white font-semibold text-2xl">
                        <ul>Novinky</ul>
                        <ul>Aktuality</ul>
                        <ul>Galerie</ul>
                        <ul>FAQ</ul>
                    </nav>
                </div>
                <div className="pr-0">
                    <img src={Picture} alt="logo" className="w-[100px]" />
                </div>
            </div>

        </div>
    )
}

export default HeaderElse