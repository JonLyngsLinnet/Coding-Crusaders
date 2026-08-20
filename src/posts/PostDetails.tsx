import {Link, useParams, useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "@/Models/PostInterface.ts";
import type {Comment} from "@/Models/CommentsInterface.ts";
import type {Reactions} from "@/Models/ReactionsInterface.ts";

export function PostDetails() {
    const {id} = useParams();
    const location = useLocation();
    const passedPost = location.state?.post as Post | undefined;
    const navigate = useNavigate()

    const [post, setPost] = useState<Post | null>(passedPost ?? null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [reaction, setReaction] = useState<Reactions>();

    useEffect(() => {
            if (!passedPost) {
                fetch(`https://dummyjson.com/posts/${id}`)
                    .then(res => res.json())
                    .then(setPost);
            }

            fetch(`https://dummyjson.com/posts/${id}/comments`)
                .then(res => res.json())
                .then((json: { comments?: Comment[] }) => setComments(json.comments ?? []));
        }, [id]
    );

    if (!post) return <p>Loading...</p>;

    return (
        <div className="post-detail">
            <button className="back-button" onClick={() => navigate('/')}>← Back to posts</button>
            <h1 className="post-detail-title">{post.userId} {post.title}</h1>
            <p className="post-detail-body">{post.body}</p>
            <h6 className="reactions-heading">Views: {post.views} 👍 {post.reactions.likes} 👎 {post.reactions.dislikes}</h6>


            <h2 className="comments-heading">Comments</h2>
            {comments.length === 0 && <p className="no-comments">No comments yet.</p>}
            <ul className="comment-list">
                {comments.map(c => (
                    <li className="comment-item" key={c.id}>
                        <strong className="comment-author">{c.user.username}</strong>
                        <span className="comment-body">{c.body}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}