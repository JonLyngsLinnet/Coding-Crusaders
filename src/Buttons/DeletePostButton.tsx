import type {MyChildComponentProps} from "@/posts/Post.tsx";

export function DeletePostButton({posts, removePost}: MyChildComponentProps) {

    return (
        <div>
        <button onClick={() => removePost(posts.id)}>Delete</button>
        </div>
    )
}