import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "./Post"; // adjust import path to wherever Post is defined

export function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then((json) => setPost(json));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}