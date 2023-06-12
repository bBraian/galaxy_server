const prisma = require("../../lib/prisma");

async function getCategories(clientId) {
    const categories = await prisma.categories.findMany({
        where: {
            clients_id: parseInt(clientId)
        }
    })
    return categories
}

async function getOneCategory(categoryId) {
    const category = await prisma.categories.findUnique({
        where: {
            id: parseInt(categoryId)
        }
    })
    return category
}

async function postCategory(data) {
    try {
        const { clientId, title, user } = data
        const category = await prisma.categories.create({
            data: {
                clients_id: parseInt(clientId),
                title,
                changed_user: user,
                created_user: user
            }
        })
    
        return category;
    } catch (error) {
        console.log(error)
        throw "Erro post category"
    }

}

module.exports = {
    getCategories,
    postCategory,
    getOneCategory
}