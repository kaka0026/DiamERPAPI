var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _employee = require('../../Controllers/HR/Employee.Controllers');

router.post('/EmployeeFill', verifyToken, _employee.EmployeeFill)
router.post('/DepartmentFillDrop', verifyToken, _employee.DepartmentFillDrop)
router.post('/DesignationFillDrop', verifyToken, _employee.DesignationFillDrop)
router.post('/EmployeeSave', verifyToken, _employee.EmployeeSave)
router.post('/EmployeeDelete', verifyToken, _employee.EmployeeDelete)
router.post('/EmployeeCheck', verifyToken, _employee.EmployeeCheck)


module.exports = router;