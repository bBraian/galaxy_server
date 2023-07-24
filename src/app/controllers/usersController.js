const usersModel = require("../models/usersModel");
const bcrypt = require('bcrypt');
const { z } = require("zod");

async function createUser(req, res) {
    const postSchema = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string()
    })
    try {
        postSchema.parse(req.body)
        let user = req.body
        bcrypt.hash(user.password, 10, (err, hash) => {
            if (err) {
                return res.status(400).json({"message":"Erro ao encriptar a senha"})
            } else {
                user.password = hash
            }
        });
        const userRes = await usersModel.postUser(user)

        return res.status(200).json(userRes);
    } catch (e) {
        console.log(e)
        return res.status(400).json({"message":e});
    }
}

async function getUser(req, res) {

}

module.exports = {
    createUser,
    getUser
}