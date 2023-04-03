const clients = require("../../data/fakeData");

function getAll() {
    return clients.clients;
}

function getClientData(clientTitle) {
    const clientData = clients.clients.filter(client => client.url === clientTitle);
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
    const clientProducts = clients.products.filter(product => product.clientId === clientId);
    if(clientProducts.length === 0) {
        return {}
    }
    return clientProducts;
}

function getOptions(categoryId) {
    categoryId = parseInt(categoryId);
    if(isNaN(categoryId)) {
        throw 'categoryId invalid';
    }
    const options = clients.options.filter(option => option.categoryId === categoryId);
    if(options.length === 0) {
        return []
    }
    console.log(options);
    return options;
}

module.exports = {
    getAll,
    getClientData,
    getClientCategories,
    getClientProducts,
    getOptions
}