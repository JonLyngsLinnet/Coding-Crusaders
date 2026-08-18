import {useParams} from "react-router";

export function PostDetails(){
    const {id} = useParams();

    return (
        <div>
            <h1>Post Details</h1>
            <p>Post id: {id}</p>
        </div>
    )
}