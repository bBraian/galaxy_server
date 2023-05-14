const prisma = require("../../lib/prisma");
const clientModel = require("../models/clientModel");
const z = require('zod')

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
        const clientData = await clientModel.getClient(req.query.clientUrl);
        return res.status(200).json(clientData);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

// Function to create a client
async function postClient(req, res) {
    const postSchema = z.object({
        title: z.string().min(3).max(20),
        logo: z.string(),
        background: z.string(),
        url: z.string(),
        user: z.string(),
    })
      
    try {
        postSchema.parse(req.body)
        const clientData = await clientModel.createClient(req.body);
        return res.status(200).json(clientData);
    } catch(e) {
        console.log(e)
        return res.status(400).json(e);
    }
}

function getClientCategories(req, res) {
    try {
        const categories = clientModel.getClientCategories(req.query.clientId);
        return res.status(200).json(categories);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

function getClientProducts(req, res) {
    try {
        const products = clientModel.getClientProducts(req.query.clientId);
        return res.status(200).json(products);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

function getOptions(req, res) {
    try {
        const options = clientModel.getOptions(req.query.categoryId);
        return res.status(200).json(options);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

module.exports = {
    getAll,
    getClient,
    postClient,
    getClientCategories,
    getClientProducts,
    getOptions
}
