import CoreLayout from '~/layouts/CoreLayout';
import ProjectsRoute from '~/routes/Projects';
import LoginRoute from '~/routes/Login';

export const createRoutes = () => ({
    path: '/',
    component: CoreLayout,
    indexRoute: {
        onEnter: (_, replaceState) => replaceState(null, '/projects'),
    },
    childRoutes: [
        ProjectsRoute,
        LoginRoute,
    ],
});

export default createRoutes;
