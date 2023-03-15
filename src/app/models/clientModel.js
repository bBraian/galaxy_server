const clients = require("../../data/fakeData");

function getAll() {
    return clients;
}

function getClientData(clientId) {
    const clientData = clients.filter(client => client.id == clientId);
    return clientData;
}

module.exports = {
    getAll,
    getClientData
}