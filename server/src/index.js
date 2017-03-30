import path from 'path';
import express from 'express';
import http from 'http';

import apiRoutes from './controllers/api';

const app = express();
const server = http.Server(app);

const port = process.env.PORT || 8080;

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

/* eslint-disable no-console*/
server.listen(port, console.log.bind(`App running on port ${port}.`));
/* eslint-enable no-console*/

export default {
    port,
};
