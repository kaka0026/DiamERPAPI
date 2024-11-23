var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _fluorescenceMast = require('../../Controllers/Master/FluorescenceMast.Controllers');

router.post('/FloMastFill', verifyToken, _fluorescenceMast.FloMastFill)
router.post('/FloMastSave', verifyToken, _fluorescenceMast.FloMastSave)
router.post('/FloMastDelete', verifyToken, _fluorescenceMast.FloMastDelete)
router.post('/FloMastCheck', verifyToken, _fluorescenceMast.FloMastCheck)


module.exports = router;