const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.TrackMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('O_id', sql.Int, parseInt(req.body.O_id))
                request.input('PageName', sql.VarChar(100), req.body.PageName)

                request = await request.execute('WB_Track_Fill_By_PageName');
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