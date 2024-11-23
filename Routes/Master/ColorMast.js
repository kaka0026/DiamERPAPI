var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _colorMast = require('../../Controllers/Master/ColorMast.Controllers');

router.post('/ColMastFill', verifyToken, _colorMast.ColMastFill)
router.post('/ColMastSave', verifyToken, _colorMast.ColMastSave)
router.post('/ColMastDelete', verifyToken, _colorMast.ColMastDelete)
router.post('/ColMastCheck', verifyToken, _colorMast.ColMastCheck)


module.exports = router;