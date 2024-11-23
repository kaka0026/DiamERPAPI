var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _broker = require('../../Controllers/Transaction/Broker.Controllers');

router.post('/BrokerFill', verifyToken, _broker.BrokerFill)
router.post('/BrokerSave', verifyToken, _broker.BrokerSave)
router.post('/BrokerDelete', verifyToken, _broker.BrokerDelete)

module.exports = router;