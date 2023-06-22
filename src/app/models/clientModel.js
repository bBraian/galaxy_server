const prisma = require("../../lib/prisma");

async function getAll() {
    const clientsData = await prisma.clients.findMany({
        include: {
            Categories: true,
            Products: true,
        }
    })
    return clientsData
}

async function getClient(url) {
    const clientData = await prisma.clients.findUnique({
        where: {
            url: url
        },
        include: {
            Categories: true,
            Products: true
            
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

module.exports = {
    getAll,
    getClient,
    createClient,
    getClientById
}