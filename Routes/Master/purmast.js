var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _purmasttype = require('../../Controllers/Master/purmast.Controllers');

router.post('/PurchaseTypeFill', verifyToken, _purmasttype.PurchaseTypeFill)
router.post('/PurchaseTypeSave', verifyToken, _purmasttype.PurchaseTypeSave)
router.post('/PurchaseTypeDelete', verifyToken, _purmasttype.PurchaseTypeDelete)
router.post('/PurchaseTypeCheck', verifyToken, _purmasttype.PurchaseTypeCheck)
router.post('/PurchaseFillDrop', verifyToken, _purmasttype.PurchaseFillDrop)
router.post('/GetMemoBySupplier', verifyToken, _purmasttype.GetMemoBySupplier)
router.post('/GetMemoByProcess', verifyToken, _purmasttype.GetMemoByProcess)
router.post('/GETMEMODETAILBYPURCHASE', verifyToken, _purmasttype.GETMEMODETAILBYPURCHASE)


module.exports = router;