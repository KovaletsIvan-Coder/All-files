import About from "../MainPages/About";
import Login from "../MainPages/Login";
import PostIdPage from "../MainPages/PostIdPage";
import Posts from "../MainPages/Posts";

export const PrivateRoutes = [
    {path:'/about', component: About},
    {path:'/posts', component: Posts},
    {path:'/posts/:id', component: PostIdPage},
]
export const PublicRoutes = [
    {path:'/login', component: Login}
]