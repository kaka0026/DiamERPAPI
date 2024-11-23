var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _incCat = require('../../Controllers/Master/IncCat.Controllers');

router.post('/IncCatFill', verifyToken, _incCat.IncCatFill)
router.post('/IncCatSave', verifyToken, _incCat.IncCatSave)
router.post('/IncCatDelete', verifyToken, _incCat.IncCatDelete)
router.post('/IncCatCheck', verifyToken, _incCat.IncCatCheck)


module.exports = router;