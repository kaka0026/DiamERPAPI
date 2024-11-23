const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.MMMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_MMMast_Fill');

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

exports.ShapeMastForMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('MaterialId', sql.VarChar, req.body.MaterialId = null ? "" : req.body.MaterialId)
                request = await request.execute('WB_ShapeMastForMaterial_Fill');
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

exports.MMMastSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('MM_CODE', sql.Int, parseInt(req.body.MM_CODE))
                request.input('MM_DESC', sql.VarChar, req.body.MM_DESC)
                request.input('F_MM', sql.VarChar, req.body.F_MM)
                request.input('T_MM', sql.VarChar, req.body.T_MM)
                request.input('Material', sql.VarChar, req.body.Material)
                request.input('Shape', sql.VarChar, req.body.Shape)
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('MM_SORTNAME', sql.VarChar, req.body.MM_SORTNAME)
                request.input('IsActive', sql.Bit, req.body.IsActive)


                request = await request.execute('WB_MMMast_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.MMMastDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('MM_CODE', sql.Int, parseInt(req.body.MM_CODE))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_MMMast_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.MMMastCheck = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('MM_SORTNAME', sql.VarChar, req.body.MM_SORTNAME)

                request = await request.execute('WB_MMCode_Check');

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

