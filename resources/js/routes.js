import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Post from './views/Post.vue';
import NotFound from './views/404.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/:slug',
        name: 'post',
        component: Post,
        props: true,
    },
    {
        path: '/*',
        component: NotFound,
    },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;