import CoreLayout from '~/layouts/CoreLayout';
import NewProjectViewRoute from '~/routes/NewProjectView';
import ProjectViewRoute from '~/routes/ProjectView';
import ProjectsRoute from '~/routes/Projects';
import LoginRoute from '~/routes/Login';
import NewLinkRoute from '~/routes/NewLinkView';
import LinksRoute from '~/routes/Links';
import LinkViewRoute from '~/routes/LinkView';
import NewTargetViewRoute from '~/routes/NewTargetView';
import TargetViewRoute from '~/routes/TargetView';
import TargetsRoute from '~/routes/Targets';

export const createRoutes = () => ({
    path: '/',
    component: CoreLayout,
    indexRoute: {
        onEnter: (_, replaceState) => replaceState(null, '/projects'),
    },
    childRoutes: [
        LoginRoute,
        NewProjectViewRoute,
        ProjectViewRoute,
        ProjectsRoute,
        NewLinkRoute,
        LinkViewRoute,
        LinksRoute,
        NewTargetViewRoute,
        TargetViewRoute,
        TargetsRoute,
    ],
});

export default createRoutes;
