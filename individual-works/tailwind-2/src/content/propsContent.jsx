// import  from "../assets/.png"

function ContainerPreset (props) {

    return (
        <>
            <div className="">

                <div className="h-10 w-10">{props.image}</div>

                <div className="text-semibold">{props.title}</div>

                <div className="text-xs">{props.text}</div>
            </div>
        </>
    )
}

export default ContainerPreset