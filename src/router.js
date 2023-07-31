const express = require("express");
const clientController = require("./app/controllers/clientController");
const categoriesController = require("./app/controllers/categoriesController");
const usersController = require("./app/controllers/usersController");
const productsController = require("./app/controllers/productsController");

const router = express.Router();

router.get('/clients/all', clientController.getAll);
router.get('/clients/:clientUrl', clientController.getClient);
router.put('/clients/:clientId', clientController.putClient);
router.post('/clients', clientController.postClient);


router.get('/categories/:clientId', categoriesController.getCategories);
router.post('/categories', categoriesController.createCategory);


router.post('/register/users', usersController.createUser);
router.post('/users/auth', usersController.authUser);


router.post('/products', productsController.createProduct);


module.exports = router;
