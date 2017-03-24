import express from 'express';

import { getAllByUser, getByProjectId, setById } from '../../models/project';

const router = express.Router();
router.get('/', async (req, res) => {
    let projects;
    if (req.query.userId) {
        projects = await getAllByUser(req.query.userId);
    } else if (req.query.projectId) {
        projects = await getByProjectId(req.query.projectId);
    }
    res.send(projects);
});

router.post('/', async (req, res) => {
    await setById(req.query.projectId, req.body);
    res.status(200).send(`Updated project with ID ${req.query.projectId} successfully.`);
});

export default router;
