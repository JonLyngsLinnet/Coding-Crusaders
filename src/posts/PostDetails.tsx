import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "@/Models/PostInterface.tsx";


export function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then((json) => setPost(json));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    function getPostComments(id: number){
        const [comment, setComment] = useState()

        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then(res => res.json())
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p></p>
        </div>
    )
}