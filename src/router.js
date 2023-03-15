const express = require("express");
const clientController = require("./app/controllers/clientController");

const router = express.Router();

router.get('/clients', clientController.getAll);
router.get('/clientss', clientController.getClientData)

module.exports = router;

