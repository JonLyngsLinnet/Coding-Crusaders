import type {ComponentProps} from "@/Models/ComponentProps.ts";

export function SearchFunction({onSearch} : ComponentProps){

        return(
            <div>
                <input onChange={(e) => onSearch(e.target.value)}/>
            </div>
        )
}