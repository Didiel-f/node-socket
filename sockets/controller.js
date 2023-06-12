const socketController = (socket) => {
    socket.on("enviar-mensaje", (payload) => {
        console.log('Cliente conectado', socket.id);

        socket.on('disconnect', () => {
            console.log('Cliente desconectado', socket.id)
        });
        this.io.emit('enviar-mensaje', payload); 
    });
};

module.exports = {
    socketController
};