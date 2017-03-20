import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Links!');
});

export default router;
