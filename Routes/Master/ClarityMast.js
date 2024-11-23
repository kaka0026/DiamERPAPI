var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _clarityMast = require('../../Controllers/Master/ClarityMast.Controllers');

router.post('/CalMastFill', verifyToken, _clarityMast.CalMastFill)
router.post('/CalMastSave', verifyToken, _clarityMast.CalMastSave)
router.post('/CalMastDelete', verifyToken, _clarityMast.CalMastDelete)
router.post('/CalMastCheck', verifyToken, _clarityMast.CalMastCheck)


module.exports = router;