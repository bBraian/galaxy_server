const express = require("express");
const clientController = require("./app/controllers/clientController");

const router = express.Router();

router.get('/clients/all', clientController.getAll);
router.get('/clients', clientController.getClientData);
router.get('/clients/categories', clientController.getClientCategories);

module.exports = router;

