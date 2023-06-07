const prisma = require("../../lib/prisma");

async function getCategories(clientId) {
    const categories = await prisma.categories.findMany({
        where: {
            clients_id: clientId
        }
    })
    return categories
}

async function postCategory(data) {
    const { clientId, title, user } = data

    const category = await prisma.categories.create({
        data: {
            clients_id: clientId,
            title,
            changed_user: user,
            created_user: user
        }
    })

    return category;
}

module.exports = {
    getCategories,
    postCategory
}