const prisma = require("../../lib/prisma");
const clientModel = require("../models/clientModel");

function getAll(req, res) {
    const clients = clientModel.getAll();
    return res.status(200).json(clients);
}

function getClient(req, res) {
    try {
        const client = clientModel.getClientData(req.query.name);
        return res.status(200).json(client);
    } catch(e) {
        return res.status(400).json({"message":e});
    }
}

async function postClient(req, res) {
    try {
        const { title, logo, background, url, user } = req.body
        const clientExists = await prisma.client.findUnique({
            where: { url }
        })
        console.log('hey')

        if(clientExists) {
            return res.status(400).json({
                message: 'Link ja existe'
            })
        }

        const client = await prisma.client.create({
            data: {
              title,
              logo,
              background,
              url,
              changed_user: user,
              created_user: user
            },
          })

        return res.status(201).json(client);
    } catch(e) {
        console.log(e)
        return res.status(400).json({"message":e});
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
