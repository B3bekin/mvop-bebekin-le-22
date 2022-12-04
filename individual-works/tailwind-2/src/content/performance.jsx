import Thunder from "../assets/thunder.png"

function ThunderText(props) {

    return (
        <>
            <div className="">
                <img src={Thunder} alt="Thunder" className="h-10 fill-white bg-red-400 rounded-xl w-10"/>
                <h1 className="text-semibold">Fast Performance</h1>
                <p className="text-xs">We will make sure, your blood stayes with us. You dont have to worry.</p>
            </div>
        </>
    )
}

export default ThunderText