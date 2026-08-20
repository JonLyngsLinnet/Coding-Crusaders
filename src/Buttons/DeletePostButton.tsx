import type {removeButtonProps} from "@/Models/ComponentProps.ts";

export function DeletePostButton({posts, removePost}: removeButtonProps) {

    return (
        <div>
        <button onClick={() => removePost(posts.id)}>Delete</button>
        </div>
    )
}