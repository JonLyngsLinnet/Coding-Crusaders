import type {MyChildComponentProps} from "@/posts/Post.tsx";

export function DeletePostButton({posts, removePost, }: MyChildComponentProps) {

    return <div>the Post is: {posts?.title} <button onClick={() => removePost(posts.id)}>Delete</button>
    </div>
}