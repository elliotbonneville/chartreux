import CoreLayout from '~/layouts/CoreLayout';
import ProjectsRoute from '~/routes/Projects';
import LoginRoute from '~/routes/Login';
import LinksRoute from '~/routes/Links';
import TargetsRoute from '~/routes/Targets';

export const createRoutes = () => ({
    path: '/',
    component: CoreLayout,
    indexRoute: {
        onEnter: (_, replaceState) => replaceState(null, '/projects'),
    },
    childRoutes: [
        ProjectsRoute,
        LoginRoute,
        LinksRoute,
        TargetsRoute,
    ],
});

export default createRoutes;
