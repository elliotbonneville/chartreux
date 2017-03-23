import express from 'express';

import { getAllByProject, byId } from '../../models/link';

const router = express.Router();
router.get('/', async (req, res) => {
    let links;

    if (req.query.projectId) {
        links = await getAllByProject(req.query.projectId);
    } else if (req.query.linkId) {
        links = await byId(req.query.linkId);
    }

    res.send(links);
});

export default router;
