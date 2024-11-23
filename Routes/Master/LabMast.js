var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _labMast = require('../../Controllers/Master/LabMast.Controllers');

router.post('/LBMastFill', verifyToken, _labMast.LBMastFill)
router.post('/LBMastSave', verifyToken, _labMast.LBMastSave)
router.post('/LBMastDelete', verifyToken, _labMast.LBMastDelete)
router.post('/LBMastCheck', verifyToken, _labMast.LBMastCheck)

module.exports = router;