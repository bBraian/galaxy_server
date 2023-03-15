const clientModel = require("../models/clientModel");

function getAll(req, res) {
    const clients = clientModel.getAll();
    return res.status(200).json(clients);
}

function getClientData(req, res) {
    try {
        const client = clientModel.getClientData(req.query.id);
        return res.status(200).json(client);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

function getClientCategories(req, res) {
    try {
        const client = clientModel.getClientCategories(req.query.clientId);
        return res.status(200).json(client);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

module.exports = {
    getAll,
    getClientData,
    getClientCategories
}
