var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _sizeMaster = require('../../Controllers/Master/SizeMast.Controllers');

router.post('/SizeMastFill', verifyToken, _sizeMaster.SizeMastFill)
router.post('/SizeMastSave', verifyToken, _sizeMaster.SizeMastSave)
router.post('/SizeMastDelete', verifyToken, _sizeMaster.SizeMastDelete)
router.post('/SizeMastCheck', verifyToken, _sizeMaster.SizeMastCheck)

module.exports = router;