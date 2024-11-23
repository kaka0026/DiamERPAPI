const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.OverToneMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_OverToneMast_Fill');

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

exports.OverToneMastSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('OV_Code', sql.Int, parseInt(req.body.OV_Code))
                request.input('OV_Name', sql.VarChar, req.body.OV_Name)
                request.input('OV_SortName', sql.VarChar, req.body.OV_SortName)
                request.input('Material', sql.VarChar, req.body.Material_CODE)
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('IsActive', sql.Bit, req.body.IsActive)

                request = await request.execute('WB_OverToneMast_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.OverToneMastDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('OV_Code', sql.Int, parseInt(req.body.OV_Code))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_OverToneMast_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.OverToneMastCheck = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('OV_SortName', sql.VarChar, req.body.OV_SortName)

                request = await request.execute('WB_OverToneCode_Check');

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