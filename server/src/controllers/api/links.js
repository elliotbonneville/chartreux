import express from 'express';

import { getAllByProject, byId, byTargetId } from '../../models/link';

const router = express.Router();
router.get('/', async (req, res) => {
    let links;

    if (req.query.projectId) {
        links = await getAllByProject(req.query.projectId);
    } else if (req.query.linkId) {
        links = await byId(req.query.linkId);
    } else if (req.query.targetId) {
        links = await byTargetId(req.query.targetId);
    }

    res.send(links);
});

export default router;
