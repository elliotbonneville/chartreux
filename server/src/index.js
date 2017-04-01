import path from 'path';
import express from 'express';
import http from 'http';

import auth from 'basic-auth';

import apiRoutes from './controllers/api';

const app = express();
const server = http.Server(app);

const port = process.env.PORT || 8080;

app.use('*', (req, res, next) => {
    const user = auth(req);
    if (!user || user.name !== process.env.USERNAME || user.pass !== process.env.PASSWORD) {
        Object.assign(res, {
            statusCode: 401,
        });

        res.setHeader('WWW-Authenticate', 'Basic realm="Oxmind"');
        res.end('Unauthorized');
    } else {
        next();
    }
});

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
