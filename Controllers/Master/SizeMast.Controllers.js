const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.SizeMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('M_SortName', sql.VarChar, req.body.Material)

                request = await request.execute('WB_SizeMast_Fill');
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

exports.SizeMastSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SIZE_CODE', sql.Int, parseInt(req.body.SIZE_CODE))
                request.input('SIZE_DESC', sql.Int, parseInt(req.body.SIZE_DESC))
                request.input('F_SIZE', sql.VarChar, req.body.F_SIZE)
                request.input('T_SIZE', sql.VarChar, req.body.T_SIZE)
                request.input('Material', sql.VarChar, req.body.Material)
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('SIZE_SORTNAME', sql.VarChar, req.body.SIZE_SORTNAME)
                request.input('IsActive', sql.Bit, req.body.IsActive)

                request = await request.execute('WB_SizeMast_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SizeMastDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SIZE_CODE', sql.Int, parseInt(req.body.SIZE_CODE))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_SizeMast_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SizeMastCheck = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SIZE_SORTNAME', sql.VarChareq.bodyery.SIZE_SORTNAME)
                request.input('Material', sql.VarChareq.bodyery.Material)

                request = await request.execute('WB_SizeCode_Check');

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

