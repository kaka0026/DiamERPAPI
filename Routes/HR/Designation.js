var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _designation = require('../../Controllers/HR/Designation.Controllers');

router.post('/DesignationFill', verifyToken, _designation.DesignationFill)
router.post('/DesignationSave', verifyToken, _designation.DesignationSave)
router.post('/DesignationDelete', verifyToken, _designation.DesignationDelete)
router.post('/DesignationCheck', verifyToken, _designation.DesignationCheck)


module.exports = router;