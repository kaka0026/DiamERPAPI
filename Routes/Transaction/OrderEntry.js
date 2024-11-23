var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _orderEntry = require('../../Controllers/Transaction/OrderEntry.Controllers');

router.post('/GetOderEntryFill', verifyToken, _orderEntry.GetOderEntryFill)
router.post('/OrderEntryDelete', verifyToken, _orderEntry.OrderEntryDelete)
router.post('/OrderEntrySaveUpdate', verifyToken, _orderEntry.OrderEntrySaveUpdate)
router.post('/GetOrderNo', verifyToken, _orderEntry.GetOrderNo)
router.post('/GetKTFill', verifyToken, _orderEntry.GetKTFill)
router.post('/GetColorDDLill', verifyToken, _orderEntry.GetColorDDLill)
router.post('/GetClarityDDLill', verifyToken, _orderEntry.GetClarityDDLill)

module.exports = router;