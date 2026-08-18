import type {ReactionsInterface} from "@/Models/ReactionsInterface.tsx";

export interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: ReactionsInterface
    views: number
    userId: number
}