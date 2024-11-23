const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.MemoInView = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Purchase_Memo_Fill_View');

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

exports.MaterialFillbyMemoName = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('M_cat_SortName', sql.VarChar, req.body.M_cat_SortName)

                request = await request.execute('WB_MaterialMast_Fill_By_MaterialSortName');

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

exports.MemoInProcess = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Purchase_Memo_Fill_Process');

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

exports.UpdateMemoInProcess = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;
            try {
                var request = new sql.Request();

                request.input('SrNo', sql.VarChar, req.body.SrNo)
                request.input('CVDFLAG', sql.Bit, req.body.CVDFLAG)
                request.input('DOWNSIZEFLAG', sql.Bit, req.body.DOWNSIZEFLAG)
                request.input('SHAPEFLAG', sql.Bit, req.body.SHAPEFLAG)
                request.input('GUAGEFLAG', sql.Bit, req.body.GUAGEFLAG)
                request.input('MAKEFLAG', sql.Bit, req.body.MAKEFLAG)
                request.input('FLOFLAG', sql.Bit, req.body.FLOFLAG)
                request.input('COLFLAG', sql.Bit, req.body.COLFLAG)
                request.input('FINUSER', sql.VarChar, req.body.FINUSER)

                request = await request.execute('WB_PROCESSDETAILS_SAVE_NEW');
                res.json({ Success: 1, Data: '' })

            } catch (err) {
                s
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetNewTrnNo = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('Memo_Get_TrnNo');

                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.MemoHSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('ID', sql.Int, parseInt(req.body.ID))
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request.input('TrnDate', sql.DateTime2, new Date(req.body.TrnDate))
                request.input('Supplier_Name', sql.VarChar, req.body.Supplier)
                request.input('Location', sql.VarChar, req.body.Location)
                request.input('Terms', sql.VarChar, req.body.Terms)
                request.input('DueDate', sql.VarChar, req.body.DueDate)
                request.input('Broker_Name', sql.VarChar, req.body.Broker)
                request.input('SupMemoNo', sql.VarChar, req.body.SupMemoNo)
                request.input('Comment', sql.VarChar, req.body.Comment)
                request.input('TotalWeight', sql.VarChar, req.body.TotalWeight)
                request.input('TotalSelection', sql.VarChar, req.body.TotalSelection)
                request.input('TotalRate', sql.VarChar, req.body.TotalRate)
                request.input('TotalAmount', sql.VarChar, req.body.TotalAmount)
                request.input('CreateBy', sql.VarChar, req.body.CreateBy)

                request = await request.execute('WB_Purchase_Memo_H_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.MemoLDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SrNo', sql.VarChar, req.body.SrNo)
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_Purchase_Memo_L_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetMemoFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_Purchase_Memo_L_Fill ');

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

exports.MemoCalculation = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_Purchase_Memo_L_Calculation');
                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.MemoHInView = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request.input('ID', sql.Int, parseInt(req.body.ID))

                request = await request.execute('WB_Purchase_Memo_H_Fill');
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

exports.MemoSaveCSImm = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request.input('SrNo', sql.Int, parseInt(req.body.SrNo))
                request.input('Category_Name', sql.VarChar, req.body.Category)
                request.input('Material_Name', sql.VarChar, req.body.MaterialName)
                request.input('Shape_Name', sql.VarChar, req.body.ShapeName)
                request.input('FSize', sql.Decimal(10, 2), req.body.FSize)
                request.input('TSize', sql.Decimal(10, 2), req.body.TSize)
                request.input('FromGague', sql.Decimal(10, 2), req.body.FromGague)
                request.input('ToGague', sql.Decimal(10, 2), req.body.ToGague)
                request.input('Color_Name', sql.VarChar, req.body.ColorName)
                request.input('ColorTo_Name', sql.VarChar, req.body.ColorToName)
                request.input('Clarity_Name', sql.VarChar, req.body.ClarityName)
                request.input('ClarityTo_Name', sql.VarChar, req.body.ClarityToName)
                request.input('Pcs', sql.Int, parseInt(req.body.Pcs))
                request.input('Unit', sql.VarChar, req.body.Unit)
                request.input('Weight', sql.Decimal(10, 2), req.body.Weight)
                request.input('Price', sql.Decimal(10, 2), req.body.Price)
                request.input('Amount', sql.Decimal(10, 2), req.body.Amount)
                request.input('Conv', sql.Decimal(10, 2), req.body.Conv)
                request.input('CreateBy', sql.VarChar, req.body.CreateBy)
                request.input('SIGA', sql.VarChar, req.body.SIGA)
                request.input('Purpose', sql.VarChar, req.body.Purpose)
                request.input('OrdNo', sql.VarChar, req.body.OrderNo)
                request.input('Comment', sql.VarChar, req.body.Comment)
                request.input('SIGARng', sql.VarChar, req.body.SIGARng)
                request.input('SUPCode', sql.VarChar, req.body.SUPCode)
                request.input('Certi_Name', sql.VarChar, req.body.Certi_Name)
                request.input('CertiNo', sql.VarChar, req.body.CertiNo)
                request.input('Flo_Name', sql.VarChar, req.body.Flo_Name)
                request.input('Rap', sql.VarChar, req.body.Rap)
                request.input('Disc', sql.VarChar, req.body.Disc)
                request.input('Origin', sql.VarChar, req.body.Origin)
                request.input('SizeDESC', sql.VarChar, req.body.SizeDESC)
                request.input('Cirtified', sql.VarChar, req.body.Cirtified)
                request.input('PPW', sql.VarChar, req.body.PPW)
                request.input('DrStatus', sql.VarChar, req.body.DrStatus)
                request.input('USDPrice', sql.Decimal(10, 2), req.body.USDPrice)
                request.input('Currency', sql.VarChar, req.body.Currency)
                request.input('AvgWt', sql.Decimal(10, 2), req.body.AvgWt)
                request.input('SellersMark', sql.VarChar, req.body.SellersMark)
                request.input('GoodStatus', sql.VarChar, req.body.GoodStatus)
                request.input('Color_Scale', sql.VarChar, req.body.Color_Scale)

                request = await request.execute('WB_Purchase_Memo_L_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetOriginbyMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('M_SortName', sql.VarChar, req.body.M_Sortname)

                request = await request.execute('WB_Origin_Mast_Fill_BY_Material');
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
exports.GetShapebyMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('M_SortName', sql.VarChar, req.body.M_Sortname)

                request = await request.execute('WB_ShapeMast_Fill_By_Material_SortName');
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

exports.GetClaritybyMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('M_SortName', sql.VarChar, req.body.M_SortName)

                request = await request.execute('WB_QuaMast_By_Material_SortName');

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

exports.GetColorbyMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('M_SortName', sql.VarChar, req.body.M_SortName)

                request = await request.execute('WB_ColMast_By_Material_SortName');

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

exports.GetIntensitybyMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('M_SortName', sql.VarChar, req.body.M_SortName)

                request = await request.execute('WB_IntensityMast_By_Material_SortName');

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

exports.GetOverTonebyMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('M_SortName', sql.VarChar, req.body.M_SortName)

                request = await request.execute('WB_OverToneMast_By_Material_SortName');

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

exports.GetSizebyMaterial = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('M_SortName', sql.VarChar, req.body.M_SortName)

                request = await request.execute('WB_SizeMast_Fill_By_Material_SortName');

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

exports.MemoHDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request = await request.execute('WB_Purchase_Memo_H_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.AllMemoLFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SrNo', sql.Int, parseInt(req.body.SrNo))
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_All_MemoL_Fill');

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

exports.GetOrgRap = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('S_CODE', sql.VarChar, req.body.S_CODE)
                request.input('Q_CODE', sql.VarChar, req.body.Q_CODE)
                request.input('C_CODE', sql.VarChar, req.body.C_CODE)
                request.input('Carat', sql.Decimal(10, 2), req.body.Carat)

                request = await request.execute('Usp_GetOrgRap');
                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetTrnFlagDetail = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request.input('SrNo', sql.VarChar, req.body.SrNo)
                request.input('NAME', sql.VarChar, req.body.NAME)

                request = await request.execute('WB_FILL_PROCESS_FORM');
                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetTrnFlagSaveCarat = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request.input('SrNo', sql.VarChar, req.body.SrNo)
                request.input('NAME', sql.VarChar, req.body.NAME)
                request.input('CARAT', sql.VarChar, req.body.CARAT)
                request = await request.execute('WB_PROCESS_FORM_SAVE_UPDATE');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}