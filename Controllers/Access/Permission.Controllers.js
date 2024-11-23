const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.PermissionFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_PERMISSIONDETAILS_FILL_NEW');

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

exports.PermissionSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('PAGENAME', sql.Int, parseInt(req.body.PAGEID))
                request.input('CREATEDBY', sql.VarChar, req.body.CreatedBy)
                request.input('ISEDIT', sql.Bit, req.body.ISEDIT)
                request.input('ISDELETE', sql.Bit, req.body.ISDELETE)
                request.input('ISPROCESS', sql.Bit, req.body.ISPROCESS)
                request.input('ISACTIVE', sql.Bit, req.body.ISACTIVE)
                request.input('ISVIEW', sql.Bit, req.body.ISVIEW)
                request.input('ISNEWADD', sql.Bit, req.body.ISNEWADD)
                request.input('ISTRACK', sql.Int, 1)
                request.input('ISACTIVEDEACTIVE', sql.Int, 1)

                request = await request.execute('WB_PERMISSIONDETAILS_SAVE_NEW');

                res.json({ Success: 1, Data: '' })

            } catch (err) {

                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.PageWisePermissionFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('USERID', sql.VarChar, req.body.USERID)
                request.input('PAGENAME', sql.VarChar, req.body.PAGENAME)

                request = await request.execute('WB_CHECK_OPERATION_PERMISSION_NEW');
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

exports.ActivePageWisePermissionFill = async (req, res) => {
    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;
            try {
                var request = new sql.Request();

                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_GET_PERMISSION_NEW');
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