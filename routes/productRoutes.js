const express = require('express');
const router = express.Router();

const { AddProductController, GetAllProductsController, GetProductByIdController, DeleteProductController, UpdateProductcontroller } = require('../controllers');
const { Authorization } = require('../middlewares');


router.post('/newproduct', Authorization, AddProductController);
router.get('/allproducts', Authorization, GetAllProductsController);
router.get('/productbyid', Authorization, GetProductByIdController);
router.post('/removeproduct', Authorization, DeleteProductController);
router.patch('/modifyproduct', Authorization, UpdateProductcontroller);

module.exports = router