var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _origin = require('../../Controllers/Master/Origin.Controllers');

router.post('/OriginFill', verifyToken, _origin.OriginFill)
router.post('/OriginSave', verifyToken, _origin.OriginSave)
router.post('/OriginDelete', verifyToken, _origin.OriginDelete)
router.post('/OriginMastCheck', verifyToken, _origin.OriginMastCheck)

module.exports = router;