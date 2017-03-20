import express from 'express';

import projectsRoutes from './projects';
import linksRoutes from './links';

const router = express.Router();
router.use('/projects', projectsRoutes);
router.use('/links', linksRoutes);

export default router;
