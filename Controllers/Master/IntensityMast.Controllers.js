const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.IntensityMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_IntesityMast_Fill');

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

exports.IntensityMastSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('INT_Code', sql.Int, parseInt(req.body.INT_Code))
                request.input('INT_Name', sql.VarChar, req.body.INT_Name)
                request.input('INT_SortName', sql.VarChar, req.body.INT_SortName)
                request.input('Material', sql.VarChar, req.body.Material_CODE)
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('IsActive', sql.Bit, req.body.IsActive)

                request = await request.execute('WB_IntensityMast_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                console.log
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.IntensityMastDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('INT_Code', sql.Int, parseInt(req.body.INT_Code))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_IntensityMast_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.IntensityMastCheck = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('INT_SortName', sql.VarChar, req.body.INT_SortName)

                request = await request.execute('WB_IntensityCode_Check');

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