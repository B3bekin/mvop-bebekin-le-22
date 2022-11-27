import Case from "../assets/case.png"

function CaseText(props) {

    return (
        <>
            <div className="">
                <img src={Case} alt="Case" className="h-10 w-10" />
                <h1 className="text-semibold">Partnership deals</h1>
                <p className="text-xs">It will be completely safe, we wont drink it, certainly no. But we cant guarantee.</p>
            </div>
        </>
    )
}

export default CaseText
