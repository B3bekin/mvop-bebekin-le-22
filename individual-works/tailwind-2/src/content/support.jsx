import Comment from "../assets/comment.png"

function CommentText(props) {

    return (
        <>
            <div className="">
                <img src={Comment} alt="Comment" className="h-10 w-10"/>
                <h1 className="text-semibold">Customer Support</h1>
                <p className="text-xs">Our job is to make the blood safe. We will do whatever it takes, to make that possible.</p>
            </div>
        </>
    )
}

export default CommentText