

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    // console.log('Desconectado');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
});

btnEnviar.addEventListener( 'click', () => {
    const mensaje = txtMensaje.value;

    socket.emit( 'enviar-mensaje', mensaje );
    
} );