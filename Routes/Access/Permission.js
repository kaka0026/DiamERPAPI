var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _permission = require('../../Controllers/Access/Permission.Controllers');

router.post('/PermissionFill', verifyToken, _permission.PermissionFill)
router.post('/PermissionSave', verifyToken, _permission.PermissionSave)
router.post('/PageWisePermissionFill', verifyToken, _permission.PageWisePermissionFill)
router.post('/ActivePageWisePermissionFill', verifyToken, _permission.ActivePageWisePermissionFill)


module.exports = router;