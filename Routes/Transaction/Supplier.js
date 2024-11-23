var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _supplier = require('../../Controllers/Transaction/Supplier.Controllers');

router.post('/SupplierFill', verifyToken, _supplier.SupplierFill)
router.post('/SpplierAdd', verifyToken, _supplier.SpplierAdd)
router.post('/SpplierKey', verifyToken, _supplier.SpplierKey)
router.post('/SpplierBank', verifyToken, _supplier.SpplierBank)
router.post('/SupplierAddSave', verifyToken, _supplier.SupplierAddSave)
router.post('/SupplierBankSave', verifyToken, _supplier.SupplierBankSave)
router.post('/SupplierKeyPerSave', verifyToken, _supplier.SupplierKeyPerSave)
router.post('/SupplierSave', verifyToken, _supplier.SupplierSave)
router.post('/SupplierDelete', verifyToken, _supplier.SupplierDelete)
router.post('/SupplierAddDelete', verifyToken, _supplier.SupplierAddDelete)
router.post('/SupplierKeyDelete', verifyToken, _supplier.SupplierKeyDelete)
router.post('/SupplierBankDelete', verifyToken, _supplier.SupplierBankDelete)
router.post('/VerifySupplier', verifyToken, _supplier.VerifySupplier)

module.exports = router;