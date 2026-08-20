import type {Post} from "@/Models/PostInterface.ts";

export interface RootInterface {
    posts: Post[]
    total: number
    skip: number
    limit: number
}