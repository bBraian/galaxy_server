const express = require("express");
const clientController = require("./app/controllers/clientController");

const router = express.Router();

router.get('/clients/all', clientController.getAll);
router.get('/clients', clientController.getClientData);
router.get('/categories', clientController.getClientCategories);
router.get('/products', clientController.getClientProducts);
router.get('/options', clientController.getOptions);

module.exports = router;

