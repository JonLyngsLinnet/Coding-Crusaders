import {useState} from "react";
import type {Post} from "@/Models/PostInterface.ts";

interface CreatePostProps {
    onPostCreated: (post: Post) => void;
}

export function CreatePost({onPostCreated}: CreatePostProps) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function addPost() {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, body, userId: 5})
        })
            .then(res => res.json())
            .then((newPost: Post) => onPostCreated(newPost));
        setTitle("");
        setBody("");
    }

    return (
        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title" />
            <input value={body} onChange={e => setBody(e.target.value)} placeholder="Post description" />
            <button onClick={addPost}>Add Post</button>
        </div>
    );
}