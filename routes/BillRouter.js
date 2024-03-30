const express = require('express');
const CreateBillController = require('../controllers/BillControllers/CreateBillController');
const router = express.Router();

const { DisplayBillController } = require('../controllers')


router.post('/createbill', CreateBillController);

router.get('/getBill/:billid', DisplayBillController);

module.exports = router;