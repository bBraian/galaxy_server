const clients = require("../../data/fakeData");
const prisma = require("../../lib/prisma");

async function getAll() {
    try {
        const clientsData = await prisma.client.findMany()
        return clientsData
    } catch (error) {
        throw new Error(error);
    }
}

async function getClient(clientId) {
    try {
        const clientData = await prisma.client.findUnique({
            where: {
                id: clientId
            }
        })
        return clientData;
    } catch (error) {
        throw new Error(error);
    }
}

async function createClient(data) {
    const { title, logo, background, url, user } = data
    const clientExists = await prisma.client.findUnique({
        where: { url }
    })

    if(clientExists) {
        throw new Error('Url ja existe!');
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

    return client;
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
    getClient,
    createClient,
    getClientCategories,
    getClientProducts,
    getOptions
}