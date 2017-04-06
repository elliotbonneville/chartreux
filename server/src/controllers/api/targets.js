import express from 'express';

import { target } from '../../../models';

const router = express.Router();
router.get('/', async (req, res) => {
    let links;
    const { projectId, targetId } = req.query;
    if (projectId) {
        links = await target.findAll({
            where: {
                project_id: projectId,
            },
        });
    } else if (targetId) {
        links = await target.find({
            where: {
                id: targetId,
            },
        });
    }

    res.send(links);
});

router.post('/new', async (req, res) =>
    target.build(req.body).save().then(::res.send),
);

router.post('/', async (req, res) => {
    await target.update(
        req.body,
        { where: { id: req.query.targetId } },
    );

    res.sendStatus(200);
});

router.delete('/', async (req, res) => {
    target.destroy({
        where: {
            id: req.query.id,
        },
    });
    res.sendStatus(200);
});

export default router;
