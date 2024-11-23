var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _mMMast = require('../../Controllers/Master/MMMast.Controllers');

router.post('/MMMastFill', verifyToken, _mMMast.MMMastFill)
router.post('/MMMastSave', verifyToken, _mMMast.MMMastSave)
router.post('/MMMastDelete', verifyToken, _mMMast.MMMastDelete)
router.post('/MMMastCheck', verifyToken, _mMMast.MMMastCheck)
router.post('/ShapeMastForMaterial', verifyToken, _mMMast.ShapeMastForMaterial)

module.exports = router;