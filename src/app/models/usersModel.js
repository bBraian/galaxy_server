const prisma = require("../../lib/prisma");

async function getUser(userId) {
    const user = await prisma.users.findUnique({
        where: {
            id: userId
        }
    })
    return user
}

async function postUser(data) {
    try {
        const { username, password, email } = data
        const user = await prisma.users.create({
            data: {
                username,
                password,
                email
            }
        })
    
        return user;
    } catch (error) {
        console.log(error)
        throw "Erro post users"
    }
}

module.exports = {
    getUser,
    postUser
}