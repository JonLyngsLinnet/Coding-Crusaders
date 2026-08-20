import {useEffect, useState} from "react";
import {DeletePostButton} from "@/Buttons/DeletePostButton.tsx";
import {SearchFunction} from "@/Components/SearchFunction.tsx"
import {Link} from "react-router";
import type {Post} from "@/Models/PostInterface.ts";
import {CreatePost} from "@/posts/CreatePost.tsx";
import {atom, useAtom} from "jotai";

export const AllPosts = atom<Post[]>([])

export function Posts() {

    const [posts, setPosts] = useAtom(AllPosts)
    const [searching, setSearching] = useState<string>("")
    const filteredPosts = posts.filter(searchForPost)


    useEffect(() => {
        if (posts.length > 0)
            return;
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((json) => {
                setPosts(json.posts)
            })

    }, [posts]);

    function searchForPost(posts: Post) {
        return (
            posts.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase())
        )
    }

    function removePost(id: number) {
        const duplicate = [...posts];
        const filteredArray = duplicate.filter(p => p.id != id)
        setPosts(filteredArray)
    }

    return <div>
        <p>Search for a post:</p>
        <SearchFunction onSearch={setSearching}/>
        <p></p>
        {<CreatePost onPostCreated={(post) => setPosts([post, ...posts])}/>}
        {filteredPosts.map(p => {
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


