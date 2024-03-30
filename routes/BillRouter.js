const express = require('express');
const CreateBillController = require('../controllers/BillControllers/CreateBillController');
const router = express.Router();

const { DisplayBillController } = require('../controllers')


router.post('/Createbill', CreateBillController);

router.get('/GetBill/:BillId', DisplayBillController);

module.exports = router;