import type {User} from "@/Models/UserInterface.ts";


export interface Comment {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}