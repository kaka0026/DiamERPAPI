const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.SettingCodeFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Get_Setting_Code_Drop');

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

exports.GETSettingCodeNew = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('Usp_GetSettingCode');

                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetSaveDesignFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('SettingCode', sql.VarChar, req.body.SettingCode)

                request = await request.execute('WB_Saved_LinkDesign_Fill_By_Id');
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

exports.GetColorDatabySubCode = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Category_Name', sql.VarChar, req.body.Category_Name)
                request.input('SubCategory_Name', sql.VarChar(64), req.body.Sub_Category_Name = null ? "" : req.body.Sub_Category_Name)
                request.input('SettingCode', sql.VarChar, req.body.SettingCode)

                request = await request.execute('WB_Other_ColorDesigne_Fill_By_Id');

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

exports.SaveLinkDesigne = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('LinkDesignCode', sql.Int, parseInt(req.body.LinkDesignCode))
                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('SettingCode', sql.VarChar, req.body.SettingCode)
                request.input('SettingDesigneCode', sql.VarChar, req.body.SettingDesigneCode)
                request.input('InitSettingCode', sql.VarChar, req.body.InitSettingCode)

                request = await request.execute('WB_Link_Design_Mast_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.LinktDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('LinkDesignCode', sql.VarChar, req.body.LinkDesignCode)

                request = await request.execute('WB_linkDesign_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}