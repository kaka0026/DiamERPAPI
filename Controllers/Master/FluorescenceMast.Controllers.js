const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.FloMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_FloMast_Fill');

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

exports.FloMastSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('FLO_CODE', sql.Int, parseInt(req.body.FLO_CODE))
                request.input('FLO_DESC', sql.VarChar, req.body.FLO_DESC)
                request.input('FLO_SORTNAME', sql.VarChar, req.body.FLO_SORTNAME)
                request.input('Material', sql.VarChar, req.body.Material_CODE)
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('IsActive', sql.Bit, req.body.IsActive)

                request = await request.execute('WB_FloMast_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.FloMastDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('FLO_CODE', sql.Int, parseInt(req.body.FLO_CODE))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_FloMast_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.FloMastCheck = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('FLO_SORTNAME', sql.VarChar, req.body.FLO_SORTNAME)

                request = await request.execute('WB_CutCode_Check');

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