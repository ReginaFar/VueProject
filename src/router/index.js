import { createRouter,createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectDetails from '../pages/ProjectDetails';
import NotFound from '../pages/NotFound';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage, 
    },
    {
        path: '/blogpage',
        name: 'BlogPage',
        component: BlogPage, 
    },
    {
        path: '/blogdetails',
        name: 'BlogDetailsPage',
        component: BlogDetailsPage, 
    },
    {
        path: '/projectpage',
        name: 'ProjectPage',
        component: ProjectPage, 
    },
    {
        path: '/projectdetails',
        name: 'ProjectDetails',
        component: ProjectDetails, 
    },
    {
        path: '/:CatchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router