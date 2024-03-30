const express = require('express');
const CreateBillController = require('../controllers/BillControllers/CreateBillController');
const router = express.Router();

const { DisplayBillController, GetAllBillsController } = require('../controllers')


router.post('/createbill', CreateBillController);

router.get('/getBill/:billid', DisplayBillController);

router.get('/allbills', GetAllBillsController);

module.exports = router;