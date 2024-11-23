var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _metalColor = require('../../Controllers/Design/MetalColor.Controllers');

router.post('/MetalColorFill', verifyToken, _metalColor.MetalColorFill)
router.post('/MetalColorSave', verifyToken, _metalColor.MetalColorSave)
router.post('/MetalColorDelete', verifyToken, _metalColor.MetalColorDelete)



module.exports = router;