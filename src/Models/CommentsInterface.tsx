import type {User} from "@/Models/UserInterface.tsx";


export interface Comment {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}