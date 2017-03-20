import path from 'path';
import express from 'express';
import http from 'http';

import apiRoutes from './controllers/api';

const app = express();
const server = http.Server(app);

app.use(
    express.static(
        path.join(__dirname, '../../client/dist/'),
    ),
);

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../client/public', 'index.html'),
    );
});

server.listen(
    '8080',
    console.log.bind('Example app listening on port 8080'),
);
