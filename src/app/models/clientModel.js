const clients = require("../../data/fakeData");

function getAll() {
    return clients.clients;
}

function getClientData(clientId) {
    clientId = parseInt(clientId);
    if(isNaN(clientId)) {
        throw 'clientId invalid';
    }
    const clientData = clients.clients.filter(client => client.id === clientId);
    if(clientData.length === 0) {
        return {}
    }
    return clientData[0];
}

function getClientCategories(clientId) {
    clientId = parseInt(clientId);
    if(isNaN(clientId)) {
        throw 'clientId invalid';
    }
    const clientCategories = clients.categories.filter(category => category.clientId === clientId);
    console.log(clientCategories);
    if(clientCategories.length === 0) {
        return {}
    }
    return clientCategories;
}

function getClientProducts(clientId) {
    clientId = parseInt(clientId);
    if(isNaN(clientId)) {
        throw 'clientId invalid';
    }
    const clientProducts = clients.products.filter(category => category.clientId === clientId);
    console.log(clientCategories);
    if(clientCategories.length === 0) {
        return {}
    }
    return clientCategories;
}

module.exports = {
    getAll,
    getClientData,
    getClientCategories
}