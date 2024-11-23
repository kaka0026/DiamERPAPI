const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.KTMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_KT_Mast_Fill');

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

exports.KTMastSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('KT_Id', sql.VarChar, req.body.KT_Id)
                request.input('KT_Code', sql.VarChar, req.body.KT_Code)
                request.input('KT_Desc', sql.VarChar, req.body.KT_Desc)
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('IsActive', sql.Bit, req.body.IsActive)

                request = await request.execute('WB_KT_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.KTMastDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('KT_Id', sql.Int, parseInt(req.body.KT_Id))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_KT_Mast_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.KTMastCheck = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('KT_Code', sql.VarChar, req.body.KT_Code)

                request = await request.execute('WB_KT_Check');

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