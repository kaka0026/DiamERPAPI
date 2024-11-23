var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _purchase = require('../../Controllers/Transaction/Purchase.Controllers');

router.post('/PurchaseView', verifyToken, _purchase.PurchaseView)
router.post('/PurchaseHFill', verifyToken, _purchase.PurchaseHFill)
router.post('/PurchaseLFill', verifyToken, _purchase.PurchaseLFill)
router.post('/PurchaseHDelete', verifyToken, _purchase.PurchaseHDelete)
router.post('/PurchaseLDelete', verifyToken, _purchase.PurchaseLDelete)
router.post('/SupplierFill', verifyToken, _purchase.SupplierFill)
router.post('/BrokerFill', verifyToken, _purchase.BrokerFill)
router.post('/GetNewTrnNo', verifyToken, _purchase.GetNewTrnNo)
router.post('/PurchaseBillCalculation', verifyToken, _purchase.PurchaseBillCalculation)
router.post('/BillHSave', verifyToken, _purchase.BillHSave)
router.post('/BillLSave', verifyToken, _purchase.BillLSave)
router.post('/PurchaseLFillModel', verifyToken, _purchase.PurchaseLFillModel)

module.exports = router;