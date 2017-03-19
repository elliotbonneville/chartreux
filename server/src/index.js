import path from 'path';
import express from 'express';
import http from 'http';

import socketManager from './controllers/socketManager';

const app = express();
const server = http.Server(app);
socketManager.init(server);

app.use(
    express.static(
        path.join(__dirname, '../../client/dist/'),
    ),
);

app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../client/public', 'index.html'),
    );
});

server.listen(
    '8080',
    console.log.bind('Example app listening on port 8080'),
);
