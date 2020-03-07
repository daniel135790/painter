const socket = new WebSocket('ws://localhost:8080');
socket.onmessage = (message) => {
    console.log(message);
};

const sendTest = (data) => {
    socket.send(data);
}

export default {
    sendTest
};