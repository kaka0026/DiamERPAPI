const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.BlackWhiteFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_NewBlackAndWhitedata_Fill');

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

exports.BlackWhiteFillById = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Id', sql.Int, parseInt(req.body.id))

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

exports.DesignerFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Emp_Fill_Drop');

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

exports.GetNewDesignCode = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Category_Name', sql.VarChar, req.body.Category_Name)


                request = await request.execute('Usp_GetDesignCode_New');

                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.FillSubCategoryDrop = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Category_Name', sql.VarChar, req.body.Category_Name)

                request = await request.execute('WB_SubCategoryMast_Fill_by_CategoryId');

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

exports.BlackWhiteSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('Id', sql.Int, parseInt(req.body.Id))
                request.input('DesigneId', sql.Int, parseInt(req.body.DesigneId))
                request.input('DesigneCode', sql.VarChar, req.body.DesigneCode)
                request.input('Designercode_Name', sql.VarChar, req.body.Designercode_Name)
                request.input('Category_Name', sql.VarChar, req.body.Category_Name)
                request.input('SubCategory_Name', sql.VarChar, req.body.Sub_Category_Name)
                request.input('Orientation', sql.VarChar, req.body.Orientation)
                request.input('DesigneImage', sql.VarChar, req.body.DesigneImage)
                request.input('SelectedDate', sql.VarChar, req.body.SelectedDate)
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_Save_Update_Black_white_design');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.BlackWhiteDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('Id', sql.Int, parseInt(req.body.Id))
                request.input('USERID', sql.VarChar, req.body.USERID)

                request = await request.execute('WB_BlackAndWhiteDesigne_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.DesignerMastFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_DesignerMast_Fill');

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

exports.SubCategoryByCategoryIDFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('Category_Id', sql.Int, parseInt(req.body.Category_Id))

                request = await request.execute('WB_GetSubCategoryMast');

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

exports.DesignCodeFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('DesignerId', sql.VarChar, req.body.Designer_Id)
                request.input('CategoryId', sql.VarChar, req.body.Category_Id)
                request.input('SubCategoryId', sql.VarChar, req.body.Sub_Category_Id)

                request = await request.execute('WB_NewBlackAndWhitedata_Fill_Slider_new');

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


exports.upload = async (req, res) => {
    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            try {

                let fileNameAry = [];

                var multer = require('multer');
                const storage = multer.diskStorage({
                    destination: "images/BlackWhiteimage",
                    filename: function (req, file, cb) {
                        let fileName = file.originalname;
                        fileNameAry.push(fileName)
                        cb(null, fileName)
                    }
                });

                const upload = multer({ storage: storage }).fields([{ name: "files" }]);

                upload(req, res, (err) => {

                    res.json({ Success: 1, Data: fileNameAry })
                    if (err) {
                        res.json({ Success: 0, Data: err })
                    }
                });

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    })

}