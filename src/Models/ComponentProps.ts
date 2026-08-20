import type {Post} from "@/Models/PostInterface.ts";

export interface ComponentProps {
    onSearch: (search: string) => void
}
export interface removeButtonProps {
    posts: Post,
    removePost: (id: number) => void
}