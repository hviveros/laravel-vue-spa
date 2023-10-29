import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import ('./views/Home.vue');
const Blog = () => import ('./views/Blog.vue');
const Post = () => import ('./views/Post.vue');
const NotFound = () => import ('./views/404.vue');

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: ':slug',
        name: 'post',
        component: Post,
        props: true
    },
    {
        path: '*',
        component: NotFound
    },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;