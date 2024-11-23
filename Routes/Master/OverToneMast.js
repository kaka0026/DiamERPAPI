var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _overtoneMast = require('../../Controllers/Master/OverToneMast.Controllers');

router.post('/OverToneMastFill', verifyToken, _overtoneMast.OverToneMastFill)
router.post('/OverToneMastSave', verifyToken, _overtoneMast.OverToneMastSave)
router.post('/OverToneMastDelete', verifyToken, _overtoneMast.OverToneMastDelete)
router.post('/OverToneMastCheck', verifyToken, _overtoneMast.OverToneMastCheck)


module.exports = router;