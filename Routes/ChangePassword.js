var express = require('express');
var router = express.Router();

var { verifyToken} = require('../Config/verify/verify');
var  _chnagePassword= require('../Controllers/ChangePassword.Controllers');

router.post('/OldPasswordCheck',verifyToken,_chnagePassword.OldPasswordCheck)
router.post('/ChangePassword',verifyToken,_chnagePassword.ChangePassword)

module.exports = router;