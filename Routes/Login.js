var express = require('express');
var router = express.Router();

var { verifyToken } = require('../Config/verify/verify');
var _login = require('../Controllers/Login.Controllers');

router.post('/Login', _login.Login)
router.post('/SendOTPNumberEmail', verifyToken, _login.SendOTPNumberEmail)
router.post('/SendOTPNumber', verifyToken, _login.SendOTPNumber)

module.exports = router;