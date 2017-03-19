import databaseManager from '../controllers/databaseManager';

export default class Client {
    token = null;

    constructor(socket) {
        this.socket = socket;

        this.socket.on('handshake', (token) => {
            this.token = token;
            this.socket.emit('handshake');
        });

        this.socket.on('request data', async () => {
            if (!this.token) {
                this.socket.emit('error', 'No user token specified');
            }

            const beta = await databaseManager.request('oxmind_beta');
            const links = await databaseManager.request('links');
            console.log(beta, links);
            this.socket.emit('data', { beta, links });
        });
    }
}
