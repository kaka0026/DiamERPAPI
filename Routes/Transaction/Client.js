var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _client = require('../../Controllers/Transaction/Client.Controllers');

router.post('/ClientFill', verifyToken, _client.ClientFill)
router.post('/ClientSave', verifyToken, _client.ClientSave)
router.post('/ClientDelete', verifyToken, _client.ClientDelete)
router.post('/ClientContactDelete', verifyToken, _client.ClientContactDelete)
router.post('/ContryExtnoFill', verifyToken, _client.ContryExtnoFill)
router.post('/ContryFill', verifyToken, _client.ContryFill)
router.post('/GetEaringStyle', verifyToken, _client.GetEaringStyle)
router.post('/GetNecklaceStyle', verifyToken, _client.GetNecklaceStyle)
router.post('/getClientDetailGrid', verifyToken, _client.getClientDetailGrid)
router.post('/StateFill', verifyToken, _client.StateFill)
router.post('/CityFill', verifyToken, _client.CityFill)
router.post('/GetUserCode', verifyToken, _client.GetUserCode)
router.post('/ZipCodeFill', verifyToken, _client.ZipCodeFill)
router.post('/ZipCodeFillstart', verifyToken, _client.ZipCodeFillstart)
router.post('/FUllClientDetailSave', verifyToken, _client.FUllClientDetailSave)
router.post('/GetSupplierNameBrokerWiser', verifyToken, _client.GetSupplierNameBrokerWiser)
router.post('/ClientAdd', verifyToken, _client.ClientAdd)
router.post('/ClientAddSave', verifyToken, _client.ClientAddSave)
router.post('/ClientAddDelete', verifyToken, _client.ClientAddDelete)

module.exports = router;