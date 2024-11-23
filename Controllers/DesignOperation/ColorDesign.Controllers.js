const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.ColorDesignFillById = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Id', sql.Int, parseInt(req.body.Id))

                request = await request.execute('WB_NewBlackAndWhitedata_Fill_ById');

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

exports.ShapeByMaterialId = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Material', sql.VarChar, req.body.Material)

                request = await request.execute('WB_ShapeMast_Fill_ByMaterialCode');

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

exports.SaveDimMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('SubDesignCode', sql.VarChar, req.body.SubDesignCode)
                request.input('SrNo', sql.VarChar, req.body.SrNo)
                request.input('Material_Name', sql.VarChar, req.body.Material_Name)
                request.input('Shape_Name', sql.VarChar, req.body.Shape_Name)
                request.input('Size_code', sql.VarChar, req.body.Size_code)
                request.input('MM_code', sql.VarChar, req.body.MM_code)
                request.input('Color_Code', sql.VarChar, req.body.Color_Code)
                request.input('Clarity_Code', sql.VarChar, req.body.Clarity_Code)

                request = await request.execute('WB_Save_Dim_Material_Detail');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetSubDesignCode = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)

                request = await request.execute('WB_Get_SubDesigneCode');

                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.FillDimMaterial = async (req, res) => {
    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('SubDesignCode', sql.VarChar, req.body.SubDesignCode)

                request = await request.execute('WB_Materialdata_Fill_DesigneCode');

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

exports.SaveDisignColorDesign = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('ColorDesignId', sql.Int, parseInt(req.body.ColorDesignId))
                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('SubDesignCode', sql.VarChar, req.body.SubDesignCode)
                request.input('SelectedDate', sql.DateTime2, new Date(req.body.SelectedDate))
                request.input('Designercode', sql.VarChar, req.body.Designercode)
                request.input('Category', sql.VarChar, req.body.Category)
                request.input('SubCategory', sql.VarChar, req.body.SubCategory)
                request.input('MetalColor_Name', sql.VarChar, req.body.MetalColor_Name)
                request.input('ImageList', sql.VarChar, req.body.ImageList = null ? "" : req.body.ImageList)

                request = await request.execute('WB_Save_Update_Color_design');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.FillColorDesign = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('SubDesignCode', sql.VarChar, req.body.SubDesignCode)

                request = await request.execute('WB_Get_MatalColor_From_Design_SubDesign_Code');

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

exports.RemoveImage = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('SubDesignCode', sql.VarChar, req.body.SubDesignCode)
                request.input('ImageList', sql.VarChar, req.body.ImageList)

                request = await request.execute('WB_Remove_SubDesigne_Image');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.RemoveDesign = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('SrNo', sql.VarChar, req.body.SrNo)

                request = await request.execute('WB_Materialdata_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}