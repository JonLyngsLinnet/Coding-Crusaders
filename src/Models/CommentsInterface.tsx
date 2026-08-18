import type {User} from "@/posts/Post.tsx";

export interface Comment {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}