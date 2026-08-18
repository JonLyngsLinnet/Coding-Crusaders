import {useEffect, useState} from "react";
import {DeletePostButton} from "@/Buttons/DeletePostButton.tsx";
import {Link} from "react-router";
import type {Post} from "@/Models/PostInterface.tsx";
import {CreatePost} from "@/posts/CreatePost.tsx";
import {atom, useAtom} from "jotai";

export const AllPosts = atom<Post[]>([])

export function Posts() {
    console.log("rendering posts")

    const [posts, setPosts] = useAtom(AllPosts)

    useEffect(() => {
        console.log("executedd")
        if(posts.length > 0)
            return;
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((json) =>{
                setPosts(json.posts)
            })

    }, [posts]);



    function removePost (id: number){
        const duplicate= [...posts];
        const filteredArray = duplicate.filter ( p => p.id != id)
        setPosts( filteredArray)
    }

    return <div>
        {
            <CreatePost onPostCreated={(post) => setPosts([post, ...posts])} />}
        {posts.map(p => {
            return <div key={p.id}>
                <Link to={`/posts/${p.id}`} state={{post: p}}>
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