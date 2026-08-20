import type {Reactions} from "@/Models/ReactionsInterface.ts";
import type {User} from "@/Models/UserInterface.ts";

export interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}