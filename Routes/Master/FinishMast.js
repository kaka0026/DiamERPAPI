var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _finishMast = require('../../Controllers/Master/FinishMast.Controllers');

router.post('/FinishmastFill', verifyToken, _finishMast.FinishmastFill)
router.post('/FinishMastSave', verifyToken, _finishMast.FinishMastSave)
router.post('/FinishMastDelete', verifyToken, _finishMast.FinishMastDelete)
router.post('/FinishMastCheck', verifyToken, _finishMast.FinishMastCheck)


module.exports = router;