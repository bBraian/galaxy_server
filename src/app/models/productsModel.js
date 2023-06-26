const prisma = require("../../lib/prisma");

async function getProduct(clientId) {
    const categories = await prisma.categories.findMany({
        where: {
            clients_id: parseInt(clientId)
        }
    })
    return categories
}

async function postProduct(data) {
    try {
        const { categories_id, clients_id, image_url, title, description, price_original, price_discounted, user } = data

        const product = await prisma.products.create({
            data: {
                categories_id: parseInt(categories_id),
                clients_id: parseInt(clients_id),
                title,
                description,
                image_url,
                price_original: parseFloat(price_original),
                price_discounted: parseFloat(price_discounted),
                changed_user: user,
                created_user: user
            }
        })
    
        return product;
    } catch (error) {
        console.log(error)
        throw "Erro post produto"
    }

}

async function putProduct(productId, data) {
    try {
        const product = await prisma.products.update({
            data: { data },
            where: {
                id: productId
            }
        })
    
        return product;
    } catch (error) {
        console.log(error)
        throw "Erro put product"
    }
}

async function deleteProduct(productId) {
    try {
        const product = await prisma.products.delete({
            where: {
                id: productId
            }
        })
    
        return product;
    } catch (error) {
        console.log(error)
        throw "Erro deletar produto"
    }
}

module.exports = {
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}