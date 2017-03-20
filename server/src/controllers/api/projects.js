import express from 'express';

import { getAllByUser } from '../../models/project';

const router = express.Router();
router.get('/', async (req, res) => {
    const projects = await getAllByUser(req.query.userId);
    res.send(projects);
});

export default router;
