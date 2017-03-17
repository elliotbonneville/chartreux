import path from 'path';

import express from 'express';

const app = express();

app.use(
    express.static(
        path.join(__dirname, '../../client/dist/')
    )
);

app.get('*', (req, res) => {
    res.sendFile(
        path.join( __dirname, '../../client/public', 'index.html')
    );
});

app.listen(
    '8080',
    console.log.bind('Example app listening pon port 8080'),
);
