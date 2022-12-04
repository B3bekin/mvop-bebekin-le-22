import Crown from "../assets/crown.png"

function CrownText(props) {

    return (
        <>
            <div className="">
                <img src={Crown} alt="Crown" className="h-10 fill-white bg-rose-600 rounded-xl w-10"/>
                <h1 className="text-semibold">Pro subcription</h1>
                <p className="text-xs">That some incidnents happen here and there. Its a problem our support is working on activly.</p>
            </div>
        </>
    )
}

export default CrownText