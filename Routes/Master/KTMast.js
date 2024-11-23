var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _kTMast = require('../../Controllers/Master/KTMast.Controllers');

router.post('/KTMastFill', verifyToken, _kTMast.KTMastFill)
router.post('/KTMastSave', verifyToken, _kTMast.KTMastSave)
router.post('/KTMastDelete', verifyToken, _kTMast.KTMastDelete)
router.post('/KTMastCheck', verifyToken, _kTMast.KTMastCheck)

module.exports = router;