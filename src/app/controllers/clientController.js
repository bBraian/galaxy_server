const clientModel = require("../models/clientModel");
const z = require('zod')

const clientSchema = z.object({
    title: z.string().min(3).max(20),
    logo: z.string(),
    background: z.string(),
    url: z.string(),
    user: z.string(),
})

// Function to gel all clients data
async function getAll(req, res) {
    try {
        const clients = await clientModel.getAll();
        return res.status(200).json(clients);
    } catch (e) {
        return res.status(400).json({"message":e});
    }
}

// Function to get one client data by the clientUrl
async function getClient(req, res) {
    try {
        const clientData = await clientModel.getClient(req.params.clientUrl);
        return res.status(200).json(clientData);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

// Function to create a client
async function postClient(req, res) {
    try {
        clientSchema.parse(req.body)
        const clientData = await clientModel.createClient(req.body);
        return res.status(200).json(clientData);
    } catch(e) {
        console.log(e)
        return res.status(400).json({"message":e.message});
    }
}

// Function to update client
async function putClient(req, res) {
    try {
        clientSchema.parse(req.body)
        const clientData = await clientModel.updateClient(req.params.clientId, req.body);
        return res.status(200).json(clientData);
    } catch(e) {
        console.log(e)
        return res.status(400).json({"message":e.message});
    }
}

module.exports = {
    getAll,
    getClient,
    postClient,
    putClient
}
