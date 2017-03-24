import CoreLayout from '~/layouts/CoreLayout';
import ProjectViewRoute from '~/routes/ProjectView';
import ProjectsRoute from '~/routes/Projects';
import LoginRoute from '~/routes/Login';
import LinksRoute from '~/routes/Links';
import TargetsRoute from '~/routes/Targets';
import LinkViewRoute from '~/routes/LinkView';

export const createRoutes = () => ({
    path: '/',
    component: CoreLayout,
    indexRoute: {
        onEnter: (_, replaceState) => replaceState(null, '/projects'),
    },
    childRoutes: [
        ProjectViewRoute,
        ProjectsRoute,
        LoginRoute,
        LinksRoute,
        TargetsRoute,
        LinkViewRoute,
    ],
});

export default createRoutes;
