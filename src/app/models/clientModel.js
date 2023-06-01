const prisma = require("../../lib/prisma");

async function getAll() {
    const clientsData = await prisma.clients.findMany()
    return clientsData
}

async function getClient(url) {
    const clientData = await prisma.clients.findUnique({
        where: {
            url: url
        }
    })

    const clientCategories = await prisma.categories.findMany({
        where: {
            client_id: clientData.id
        }
    })

    const clientProducts = await prisma.products.findMany({
        where: {
            categories_id: 1
        }
    })

    clientData["categories"] = clientCategories;
    // clientData["products"] = clientProducts;

    return clientData;
}

async function createClient(data) {
    const { title, logo, background, url, user } = data
    const clientExists = await prisma.clients.findUnique({
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