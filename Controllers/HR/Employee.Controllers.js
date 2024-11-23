const sql = require("mssql");
const jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.EmployeeFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Emp_Fill');

                if (request.recordset) {
                    res.json({ Success: 1, Data: request.recordset })
                } else {
                    res.json({ Success: 0, Data: "Not Found" })
                }

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.DepartmentFillDrop = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Dept_Fill_Drop');

                if (request.recordset) {
                    res.json({ Success: 1, Data: request.recordset })
                } else {
                    res.json({ Success: 0, Data: "Not Found" })
                }

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.DesignationFillDrop = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Designation_Fill_Drop');

                if (request.recordset) {
                    res.json({ Success: 1, Data: request.recordset })
                } else {
                    res.json({ Success: 0, Data: "Not Found" })
                }

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.EmployeeSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('Emp_Id', sql.Int, parseInt(req.body.Emp_Id))
                request.input('Emp_Code', sql.VarChar, req.body.Emp_Code)
                request.input('Emp_Name', sql.VarChar, req.body.Emp_Name)
                request.input('Emp_Email', sql.VarChar, req.body.Emp_Email)
                request.input('Emp_Designation_Name', sql.VarChar, req.body.Designation_Name)
                request.input('Emp_Department_Name', sql.VarChar, req.body.Dept_Name)
                request.input('Cat', sql.VarChar, req.body.Cat)
                request.input('Emp_Pass', sql.VarChar, CryptoJS.AES.encrypt(req.body.Emp_Pass, process.env.PASS_KEY).toString())
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('IsActive', sql.Bit, req.body.IsActive)
                request = await request.execute('WB_Emp_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.EmployeeDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Emp_Id', sql.Int, parseInt(req.body.Emp_Id))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_Emp_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.EmployeeCheck = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Emp_Code', sql.VarChar, req.body.Emp_Code)

                request = await request.execute('WB_CheckSalesPersonAvibility');

                if (request.recordset[0].ISEXISTS == true) {
                    res.json({ Success: 1, Data: "Code Exists" })
                } else {
                    res.json({ Success: 2, Data: "Material Not-Exists" })
                }

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}