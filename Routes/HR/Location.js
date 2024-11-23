var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _location = require('../../Controllers/HR/Location.Controllers');

router.post('/LocationFill', verifyToken, _location.LocationFill)
router.post('/LocationSave', verifyToken, _location.LocationSave)
router.post('/LocationDelete', verifyToken, _location.LocationDelete)
router.post('/LocationCheck', verifyToken, _location.LocationCheck)

module.exports = router;