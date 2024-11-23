var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _intensityMast = require('../../Controllers/Master/IntensityMast.Controllers');

router.post('/IntensityMastFill', verifyToken, _intensityMast.IntensityMastFill)
router.post('/IntensityMastSave', verifyToken, _intensityMast.IntensityMastSave)
router.post('/IntensityMastDelete', verifyToken, _intensityMast.IntensityMastDelete)
router.post('/IntensityMastCheck', verifyToken, _intensityMast.IntensityMastCheck)


module.exports = router;