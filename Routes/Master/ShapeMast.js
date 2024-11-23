var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _shapeMaster = require('../../Controllers/Master/ShapeMast.Controllers');

router.post('/ShapMastFill', verifyToken, _shapeMaster.ShapMastFill)
router.post('/MaterialMastDDL', verifyToken, _shapeMaster.MaterialMastDDL)
router.post('/ShapMastSave', verifyToken, _shapeMaster.ShapMastSave)
router.post('/ShapMastDelete', verifyToken, _shapeMaster.ShapMastDelete)
router.post('/ShapMastCheck', verifyToken, _shapeMaster.ShapMastCheck)

module.exports = router;