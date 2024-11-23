var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _trackMaster = require('../../Controllers/Master/TrackMast.Controllers');

router.post('/TrackMastFill', verifyToken, _trackMaster.TrackMastFill)

module.exports = router;