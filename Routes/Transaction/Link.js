var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _link = require('../../Controllers/Transaction/Link.Controllers');

router.post('/SettingCodeFill', verifyToken, _link.SettingCodeFill)
router.post('/GETSettingCodeNew', verifyToken, _link.GETSettingCodeNew)
router.post('/GetSaveDesignFill', verifyToken, _link.GetSaveDesignFill)
router.post('/GetColorDatabySubCode', verifyToken, _link.GetColorDatabySubCode)
router.post('/SaveLinkDesigne', verifyToken, _link.SaveLinkDesigne)
router.post('/LinktDelete', verifyToken, _link.LinktDelete)


module.exports = router;