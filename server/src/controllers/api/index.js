import express from 'express';

import projectsRoutes from './projects';
import linksRoutes from './links';
import targetsRoutes from './targets';

const router = express.Router();
router.use('/projects', projectsRoutes);
router.use('/links', linksRoutes);
router.use('/targets', targetsRoutes);

export default router;
