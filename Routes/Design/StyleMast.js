var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _styleMast = require('../../Controllers/Design/StyleMast.Controllers');

router.post('/StyleMastFill', verifyToken, _styleMast.StyleMastFill)
router.post('/CatagoryFillDrop', verifyToken, _styleMast.CatagoryFillDrop)
router.post('/StyleMastSave', verifyToken, _styleMast.StyleMastSave)
router.post('/StyleMastDelete', verifyToken, _styleMast.StyleMastDelete)

module.exports = router;