import {useEffect, useState} from "react";
import {DeletePostButton} from "@/Buttons/DeletePostButton.tsx";
import {Link} from "react-router";

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
                    <p>{p?.body}</p>
                </div>
            })
        }
    </div>;
}


export interface Root {
    posts: Post[]
    total: number
    skip: number
    limit: number
}

export interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}

export interface Reactions {
    likes: number
    dislikes: number
}

export interface MyChildComponentProps {
    posts: Post,
    removePost: (id: number) => void
}