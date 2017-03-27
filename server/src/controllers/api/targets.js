import express from 'express';

import { getAllByProject, getById, setById, createTarget } from '../../models/target';

const router = express.Router();
router.get('/', async (req, res) => {
    let links;

    if (req.query.projectId) {
        links = await getAllByProject(req.query.projectId);
    } else if (req.query.targetId) {
        links = await getById(req.query.targetId);
    }

    res.send(links);
});

router.post('/new', async (req, res) => {
    res.send(await createTarget(req.body));
});

router.post('/', async (req, res) => {
    await setById(req.query.targetId, req.body);
    res.status(200).send(`Updated target with ID ${req.query.targetid} successfully.`);
});

export default router;
