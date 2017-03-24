import express from 'express';

import {
    getAllByProject,
    getById,
    getByTargetId,
    setById,
} from '../../models/link';

const router = express.Router();

router.get('/', async (req, res) => {
    let links;

    if (req.query.projectId) {
        links = await getAllByProject(req.query.projectId);
    } else if (req.query.linkId) {
        links = await getById(req.query.linkId);
    } else if (req.query.targetId) {
        links = await getByTargetId(req.query.targetId);
    }

    res.send(links);
});

router.post('/', async (req, res) => {
    await setById(req.query.linkId, req.body);
    res.status(200).send(`Updated link with ID ${req.query.linkId} successfully.`);
});

export default router;
