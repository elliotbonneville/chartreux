import express from 'express';

import { getAllByProject } from '../../models/target';

const router = express.Router();
router.get('/', async (req, res) => {
    const links = await getAllByProject(req.query.projectId);
    res.send(links);
});

export default router;
