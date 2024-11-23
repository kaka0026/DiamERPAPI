var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _inclusionMast = require('../../Controllers/Master/InclusionMast.Controllers');

router.post('/IncMastFill', verifyToken, _inclusionMast.IncMastFill)
router.post('/IncMastSave', verifyToken, _inclusionMast.IncMastSave)
router.post('/IncMastDelete', verifyToken, _inclusionMast.IncMastDelete)
router.post('/IncMastCheck', verifyToken, _inclusionMast.IncMastCheck)

module.exports = router;