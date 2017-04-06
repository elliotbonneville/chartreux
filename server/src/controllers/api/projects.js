import express from 'express';

import { project } from '../../../models';

const router = express.Router();
router.get('/', async (req, res) => {
    let projects;
    const { userId, projectId } = req.query;
    if (userId) {
        projects = await project.findAll({
            where: {
                user_id: userId,
            },
        });
    } else if (projectId) {
        projects = await project.find({
            where: {
                id: projectId,
            },
        });
    }
    res.send(projects);
});

router.post('/new', async (req, res) =>
    project.build(req.body).save().then(::res.send),
);

router.post('/', async (req, res) => {
    await project.update(
        req.body,
        { where: { id: req.query.projectId } },
    );

    res.sendStatus(200);
});

router.delete('/', async (req, res) => {
    await project.update(
        { archive: 'y' },
        { where: { id: req.query.projectId } },
    );
    res.sendStatus(200);
});

export default router;
