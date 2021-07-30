import loadable from '@loadable/component';

const Movies = loadable(() => import('../pages/movies/Movies'));
const PageLayoutController = loadable(
    () => import('../componenets/page_layout/page_layout_controller/PageLayoutController'),
);

export const routes = [
    {
        path: '/',
        component: PageLayoutController,
    },
    {
        path: '/movies',
        component: Movies,
    },
];
