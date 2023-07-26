const usersModel = require("../models/usersModel");
const bcrypt = require('bcrypt');
const { z } = require("zod");
const prisma = require("../../lib/prisma");

async function createUser(req, res) {
    const postSchema = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string()
    })
    try {
        postSchema.parse(req.body)
        let user = req.body

        const userAlreadyExists = await prisma.users.findFirst({
            where: {
                username: user.username
            }
        })

        if(userAlreadyExists) {
            return res.status(400).json({"message": "username already taken"})
        }

        enciptPassword(user.password)
        .then(async (password) => {
            user.password = password
            try {
                const response = await usersModel.postUser(user)
                return res.status(200).json({"message": "user created"});
            } catch (e) {
                return res.status(400).json({"message":e});
            }
        })
        .catch((reject) => {
            return res.status(400).json({"message": reject})
        })

    } catch (e) {
        console.log(e)
        return res.status(400).json({"message":e});
    }
}

async function authUser(req, res) {
    const postSchema = z.object({
        username: z.string(),
        password: z.string()
    }) 
    try {
        postSchema.parse(req.body)
        const user = req.body
        const userResponse = await prisma.users.findUnique({
            where: {
                username: user.username
            }
        })

        if(!userResponse) {
            return res.status(400).json({"message":"user does not exists"})
        }

        validatePassword(user.password, userResponse.password)
        .then(() => {
            return res.status(200).json({"message":"autenticado com sucesso!"})
        })
        .catch((e) => {
            return res.status(400).json({"message": e})
        })
    } catch (e) {
        console.log(e)
        return res.status(400).json({"message":e});
    }
}

async function getUser(req, res) {

}

function enciptPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject("Erro ao encriptar a senha")
            } else {
                resolve(hash)
            }
        });
    })
}

function validatePassword(passwordForm, password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(passwordForm, password, (err, isMatch) => {
            if (err) {
                reject(err)
            } else if (isMatch) {
                resolve()
            } else {
                reject("senha errada")
            }
        });
    })
}

module.exports = {
    createUser,
    authUser,
    getUser
}