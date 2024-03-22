const express = require('express');
const router = express.Router();

const { LoginController, RegisterController } = require('../controllers')



router.post('/register', RegisterController);
router.post('/login', LoginController);



module.exports = router;