import io from 'socket.io';

import Client from '../models/Client';

const socketManager = {
    clients: [],
    init(server) {
        this.socket = io(server);
        this.socket.on('connection', (socket) => {
            this.clients.push(new Client(socket));

            socket.on('disconnect', () => {
                this.clients.splice(this.clients.indexOf(socket), 1);
            });
        });
    },
    socket: null,
};

export default socketManager;
