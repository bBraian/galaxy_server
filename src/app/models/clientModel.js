const prisma = require("../../lib/prisma");

async function getAll() {
    const clientsData = await prisma.clients.findMany()
    return clientsData
}

async function getClient(url) {
    const clientData = await prisma.clients.findUnique({
        where: {
            url: url
        },
        include: {
            Categories: true
        }
    })

    return clientData;
}

async function createClient(data) {
    const { title, logo, background, url, user } = data
    const clientUrlExists = await prisma.clients.findUnique({
        where: { url }
    })

    if(clientUrlExists) {
        throw new Error('Url ja existe!');
    }
    
    const client = await prisma.clients.create({
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

async function getClientById(clientId) {
    try {
        const client = await prisma.clients.findUnique({
            where: {
                id: parseInt(clientId)
            }
        })
        return client;
    } catch (error) {
        console.log(error)
        throw "Erro get client by id"
    }
}

function getClientCategories(clientId) {
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
    getOptions,
    getClientById
}