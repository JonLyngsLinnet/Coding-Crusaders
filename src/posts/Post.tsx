import {useEffect, useState} from "react";
import {DeletePostButton} from "@/Buttons/DeletePostButton.tsx";
import {Link} from "react-router";
import type {Post} from "@/Models/PostInterface.tsx";

export function Posts() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((json) =>{
                setPosts(json.posts)
            })

    }, []);



    function removePost (id: number){
        const duplicate= [...posts];
        const filteredArray = duplicate.filter ( p => p.id != id)
        setPosts( filteredArray)
    }

    return <div>
        {
            posts.map(p => {
                return <div key={p.id}>
                    <Link to={`/posts/${p.id}`}>
                        <h3>{p.title}</h3>
                    </Link>
                    <DeletePostButton posts={p} removePost={removePost}></DeletePostButton>
                </div>
            })
        }
    </div>;
}





export interface MyChildComponentProps {
    posts: Post,
    removePost: (id: number) => void
}

export interface Comment {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}

export interface User {
    id: number
    username: string
    fullName: string
}