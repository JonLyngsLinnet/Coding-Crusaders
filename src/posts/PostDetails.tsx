import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "@/Models/PostInterface.tsx";
import type {Comment} from "@/Models/CommentsInterface.tsx";

export function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(setPost);

        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then(res => res.json())
            .then((json: { comments: Comment[] }) => setComments(json.comments));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <Link to="/">← Back to posts</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <h2>Comments</h2>
            {comments.length === 0 && <p>No comments yet.</p>}
            <ul>
                {comments.map(c => (
                    <li key={c.id}>
                        <strong>{c.user.username}</strong>: {c.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}