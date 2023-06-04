const categoriesModel = require("../models/categoriesModel");
const clientModel = require("../models/clientModel");

// Function to gel all clients categories
async function getCategories(req, res) {
    try {
        const categories = await categoriesModel.getCategories(req.query.clientId)
        return res.status(200).json(categories);
    } catch (e) {
        return res.status(400).json({"message":e});
    }
}

// Function to create category
async function createCategory(req, res) {
    const postSchema = z.object({
        clientId: z.string(),
        title: z.string().min(3).max(20),
        user: z.string(),
    })

    
    try {
        postSchema.parse(req.body)
        const clientExists = await clientModel.getClientById(req.body.clientId)
        const categories = await categoriesModel.getCategories(req.body)
        return res.status(200).json(categories);
    } catch (e) {
        return res.status(400).json({"message":e});
    }
}

module.exports = {
    getCategories,
    createCategory
}