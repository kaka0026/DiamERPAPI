var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _materialCat = require('../../Controllers/Master/MaterialCat.Controllers');

router.post('/MaterialMastFill', verifyToken, _materialCat.MaterialMastFill)
router.post('/MaterialMastSave', verifyToken, _materialCat.MaterialMastSave)
router.post('/MaterialMastDelete', verifyToken, _materialCat.MaterialMastDelete)
router.post('/MaterialMastCheck', verifyToken, _materialCat.MaterialMastCheck)
router.post('/TypeGoodFill', verifyToken, _materialCat.TypeGoodFill)
router.post('/PurchaseTypeGoodFill', verifyToken, _materialCat.PurchaseTypeGoodFill)
router.post('/MaterialMastActive', verifyToken, _materialCat.MaterialMastActive)

module.exports = router;