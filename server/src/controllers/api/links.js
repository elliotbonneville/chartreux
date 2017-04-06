import express from 'express';

import { link } from '../../../models';

const router = express.Router();

router.get('/', async (req, res) => {
    let links;
    const { projectId, linkId, targetId } = req.query;

    if (req.query.projectId) {
        links = await link.findAll({
            where: {
                project_id: projectId,
            },
        });
    } else if (req.query.linkId) {
        links = await link.find({
            where: {
                id: linkId,
            },
        });
    } else if (req.query.targetId) {
        links = await link.findAll({
            where: {
                target_site_id: targetId,
            },
        });
    }

    res.send(links);
});

router.post('/new', async (req, res) =>
    link.build(req.body).save().then(::res.send),
);

router.post('/', async (req, res) => {
    await link.update(
        req.body,
        { where: { id: req.query.linkId } },
    );

    res.sendStatus(200);
});

router.delete('/', async (req, res) => {
    link.destroy({
        where: {
            id: req.query.id,
        },
    });
    res.sendStatus(200);
});

export default router;
