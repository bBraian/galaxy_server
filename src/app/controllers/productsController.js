const productsModel = require("../models/productsModel");
const clientModel = require("../models/clientModel");
const categoriesModel = require("../models/categoriesModel");
const { z } = require("zod");

// Function to create product
async function createProduct(req, res) {
    const postSchema = z.object({
        categories_id: z.number(),
        clients_id: z.number(),
        image_url: z.string(),
        title: z.string(),
        description: z.string().nullable(),
        price_original: z.number(),
        price_discounted: z.number().optional(),
        user: z.string()
    })
    try {
        postSchema.parse(req.body)
        const clientExists = await clientModel.getClientById(req.body.clients_id)
        if(!clientExists) {
            return res.status(400).json({"message":"Client don't exists"});
        }
        
        const categoryExists = await categoriesModel.getCategory(req.body.categories_id)
        if(!categoryExists) {
            return res.status(400).json({"message":"Category don't exists"});
        }

        const product = await productsModel.postProduct(req.body)

        console.log('asd')
        return res.status(200).json(product);
    } catch (e) {
        console.log(e)
        return res.status(400).json({"message":e});
    }
}

module.exports = {
    createProduct
}