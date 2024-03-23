const express = require('express');
const router = express.Router();

const { LoginController, RegisterController, LogoutController } = require('../controllers')



router.post('/register', RegisterController);
router.post('/login', LoginController);
router.post('/logout', LogoutController)



module.exports = router;