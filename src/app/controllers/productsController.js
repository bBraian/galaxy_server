const { z } = require("zod");
const productsModel = require("../models/productsModel");
const clientModel = require("../models/clientModel");
const categoriesModel = require("../models/categoriesModel");

// Function to create category
async function createProduct(req, res) {
    const postSchema = z.object({
        image_url: z.string(),
        title: z.string(),
        description: z.string().nullable(),
        price_original: z.string(),
        price_discounted: z.string().nullable().isOptional(true),
        user: z.string()
    })
    try {
        // postSchema.parse(req.body)
        // const clientExists = await clientModel.getClientById(req.body.clientId)
        // if(!clientExists) {
        //     return res.status(400).json({"message":"Client don't exists"});
        // }
        
        // const categoryExists = await categoriesModel.getOneCategory(req.body.categoriesId)
        // if(!categoryExists) {
        //     return res.status(400).json({"message":"Category don't exists"});
        // }

        const product = await productsModel.postProduct(req.body)

        return res.status(200).json(product);
    } catch (e) {
        return res.status(400).json({"message":e});
    }
}

module.exports = {
    createProduct
}