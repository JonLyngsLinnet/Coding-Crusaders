import type {Post} from "@/Models/PostInterface.tsx";

export interface RootInterface {
    posts: Post[]
    total: number
    skip: number
    limit: number
}