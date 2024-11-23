var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _department = require('../../Controllers/HR/Department.Controllers');

router.post('/DepartmentFill', verifyToken, _department.DepartmentFill)
router.post('/DepartmentSave', verifyToken, _department.DepartmentSave)
router.post('/DepartmentDelete', verifyToken, _department.DepartmentDelete)
router.post('/DepartmentCheck', verifyToken, _department.DepartmentCheck)


module.exports = router;