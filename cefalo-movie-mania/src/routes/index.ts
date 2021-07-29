import loadable from '@loadable/component';

const Movies = loadable(() => import('../pages/movies/Movies'));

export const routes = [
    {
        path: '/',
        component: Movies,
    },
    {
        path: '/movies',
        component: Movies,
    },
];
