import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import {Posts} from "@/posts/Post.tsx";
import {PostDetails} from "@/posts/PostDetails.tsx";
const elem = document.getElementById("root")!;
const app = (
    <>
        <RouterProvider router={createBrowserRouter([
            {
                path: '/',
                element: <Posts/>,
            },{
                        path: '/posts/:id',
                        element: <PostDetails />
                    }

        ])} />
    </>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
