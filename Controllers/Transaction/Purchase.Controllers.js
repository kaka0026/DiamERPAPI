const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.PurchaseView = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request = await request.execute('WB_Purchase_Bill_Fill_View');

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

exports.PurchaseHFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ID', sql.Int, parseInt(req.body.ID))
                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_Purchase_Bill_H_Fill');

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

exports.PurchaseLFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_Purchase_Bill_L_Fill');

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

exports.PurchaseHDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_Purchase_Bill_H_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.PurchaseLDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request.input('SrNo', sql.Int, parseInt(req.body.SrNo))

                request = await request.execute('WB_Purchase_Bill_L_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Supplier_Fill');

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

exports.BrokerFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Broker_Fill');
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

exports.GetNewTrnNo = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('Purchase_Get_TrnNo');

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

exports.PurchaseBillCalculation = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)

                request = await request.execute('WB_Purchase_Bill_L_Calculation');

                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.BillHSave = async (req, res) => {

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
                request.input('PurType', sql.VarChar, req.body.PurType)
                request.input('Terms', sql.VarChar, req.body.Terms)
                request.input('DueDate', sql.VarChar, req.body.DueDate)
                request.input('Broker_Name', sql.VarChar, req.body.Broker)
                request.input('Remark', sql.VarChar, req.body.Comment)
                request.input('TotalWeight', sql.VarChar, req.body.TotalWeight)
                request.input('TotalSelection', sql.VarChar, req.body.TotalSelection)
                request.input('TotalRate', sql.VarChar, req.body.TotalRate)
                request.input('TotalAmount', sql.VarChar, req.body.TotalAmount)
                request.input('CreateBy', sql.VarChar, req.body.CreateBy)
                request.input('Location', sql.VarChar, req.body.Location)
                request.input('MEMOTRNNO', sql.VarChar, req.body.MEMOTRNNO)
                request.input('TYPEOFPURCHASE', sql.VarChar, req.body.TYPEOFPURCHASE)
                request.input('BROKERAGE', sql.Decimal(10, 2), parseFloat(req.body.BROKERAGE))
                request.input('DISC1', sql.Decimal(10, 2), parseFloat(req.body.DISC1))
                request.input('DISC2', sql.Decimal(10, 2), parseFloat(req.body.DISC2))
                request.input('PAYDISC', sql.Decimal(10, 2), parseFloat(req.body.PAYDISC))

                request = await request.execute('WB_Purchase_Bill_H_Save_Update');
                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.BillLSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('TrnNo', sql.VarChar(50), req.body.TrnNo)
                request.input('SrNo', sql.Int, parseInt(req.body.SrNo))
                request.input('PktNo', sql.VarChar(50), req.body.PktNo)
                request.input('Category', sql.VarChar(50), req.body.Category)
                request.input('Material', sql.VarChar(50), req.body.Material)
                request.input('Shape', sql.VarChar(50), req.body.Shape)
                request.input('Size', sql.VarChar(50), req.body.Size)
                request.input('MM', sql.VarChar(50), req.body.MM)
                request.input('Origin', sql.VarChar(50), req.body.Origin)
                request.input('Color', sql.VarChar(50), req.body.Color)
                request.input('Intensity', sql.VarChar(50), req.body.Intensity)
                request.input('OverTone', sql.VarChar(50), req.body.OverTone)
                request.input('Clarity', sql.VarChar(50), req.body.Clarity)
                request.input('Weight', sql.Decimal(10, 2), parseFloat(req.body.Weight))
                request.input('Selection', sql.Decimal(10, 2), parseFloat(req.body.Selection))
                request.input('Rate', sql.Decimal(10, 2), parseFloat(req.body.Rate))
                request.input('Conv', sql.Decimal(10, 2), parseFloat(req.body.Conv))
                request.input('Amount', sql.Decimal(10, 2), parseFloat(req.body.Amount))
                request.input('Less1', sql.Decimal(10, 2), parseFloat(req.body.Less1))
                request.input('Less2', sql.Decimal(10, 2), parseFloat(req.body.Less2))
                request.input('Less3', sql.Decimal(10, 2), parseFloat(req.body.Less3))
                request.input('Remark', sql.VarChar, req.body.Remark)
                request.input('CreateBy', sql.VarChar(50), req.body.CreateBy)
                request.input('TYPEOFPUR', sql.VarChar(50), req.body.TYPEOFPUR)
                request.input('MEMONO', sql.VarChar(50), req.body.MEMONO)
                request.input('SieveGuage', sql.VarChar(50), req.body.SieveGuage)
                request.input('FSIGI', sql.Decimal(10, 2), parseFloat(req.body.FSIGI))
                request.input('TSIGI', sql.Decimal(10, 2), parseFloat(req.body.TSIGI))
                request.input('SIGIRANGE', sql.VarChar(50), req.body.SIGIRANGE)
                request.input('OPCS', sql.Int, parseInt(req.body.OPCS))
                request.input('OWEIGHT', sql.Decimal(10, 2), parseFloat(req.body.OWEIGHT))
                request.input('OUNIT', sql.VarChar(50), req.body.OUNIT)
                request.input('OAVGWEIGHT', sql.Decimal(10, 2), parseFloat(req.body.OAVGWEIGHT))
                request.input('OSELLERMARK', sql.VarChar(50), req.body.OSELLERMARK)
                request.input('OCURRENCY', sql.VarChar(10), req.body.OCURRENCY)
                request.input('OUSD', sql.Decimal(10, 2), parseFloat(req.body.OUSD))
                request.input('OCONVRATE', sql.Decimal(10, 2), parseFloat(req.body.OCONVRATE))
                request.input('OPCWT', sql.VarChar(50), req.body.OPCWT)
                request.input('OASKPRICE', sql.Decimal(10, 2), parseFloat(req.body.OASKPRICE))
                request.input('OTOTAMT', sql.Decimal(10, 2), parseFloat(req.body.OTOTAMT))
                request.input('PPCS', sql.Int, parseInt(req.body.PPCS))
                request.input('PWEIGHT', sql.Decimal(10, 2), parseFloat(req.body.PWEIGHT))
                request.input('PUNIT', sql.VarChar(50), req.body.PUNIT)
                request.input('PAVGWEIGHT', sql.Decimal(10, 2), parseFloat(req.body.PAVGWEIGHT))
                request.input('PSELECTION', sql.Decimal(10, 2), parseFloat(req.body.PSELECTION))
                request.input('PCURRENCY', sql.VarChar(50), req.body.PCURRENCY)
                request.input('PCONVRATE', sql.Decimal(10, 2), parseFloat(req.body.PCONVRATE))
                request.input('PEXCPRE', sql.Decimal(10, 2), parseFloat(req.body.PEXCPRE))
                request.input('PNETCONVRATE', sql.Decimal(10, 2), parseFloat(req.body.PNETCONVRATE))
                request.input('PUSD', sql.Decimal(10, 2), parseFloat(req.body.PUSD))
                request.input('PFINALPRICE', sql.Decimal(10, 2), parseFloat(req.body.PFINALPRICE))
                request.input('PTOTAMT', sql.Decimal(10, 2), parseFloat(req.body.PTOTAMT))
                request.input('PAYFAMT', sql.Decimal(10, 2), parseFloat(req.body.PAYFAMT))
                request.input('ADDDISC1', sql.Decimal(10, 2), parseFloat(req.body.ADDDISC1))
                request.input('ADDDISC2', sql.Decimal(10, 2), parseFloat(req.body.ADDDISC2))
                request.input('DISC1', sql.Decimal(10, 2), parseFloat(req.body.DISC1))
                request.input('DISC2', sql.Decimal(10, 2), parseFloat(req.body.DISC2))
                request.input('DISCDET1', sql.VarChar(50), req.body.DISCDET1)
                request.input('DISCDET2', sql.VarChar(50), req.body.DISCDET2)
                request.input('BROKRAGE', sql.Decimal(10, 2), parseFloat(req.body.BROKRAGE))
                request.input('BROKRAGEAMT', sql.Decimal(10, 2), parseFloat(req.body.BROKRAGEAMT))
                request.input('ERLYPAYPER', sql.Decimal(10, 2), parseFloat(req.body.ERLYPAYPER))
                request.input('ERLYPAYAMT', sql.Decimal(10, 2), parseFloat(req.body.ERLYPAYAMT))
                request.input('NETAMTPAY', sql.Decimal(10, 2), parseFloat(req.body.NETAMTPAY))
                request.input('Purpose', sql.VarChar(50), req.body.Purpose)
                request.input('STKORD', sql.VarChar(50), req.body.STKORD)
                request.input('GOODSSTATUS', sql.VarChar(50), req.body.GOODSSTATUS)
                request.input('DRILLSTATUS', sql.VarChar(50), req.body.DRILLSTATUS)
                request.input('LAB', sql.VarChar(50), req.body.LAB)
                request.input('CERTNO', sql.VarChar(50), req.body.CERTNO)
                request.input('COLORSCALE', sql.VarChar(50), req.body.COLORSCALE)
                request.input('COLORSHADE', sql.VarChar(50), req.body.COLORSHADE)
                request.input('MANSIZE', sql.VarChar(50), req.body.MANSIZE)
                request.input('COMMENT', sql.VarChar, req.body.COMMENT)
                request.input('PURRAPPRICE', sql.Decimal(10, 2), parseFloat(req.body.PURRAPPRICE))
                request.input('PURRAPDISC', sql.Decimal(10, 2), parseFloat(req.body.PURRAPDISC))
                request.input('PURRAPVAL', sql.Decimal(10, 2), parseFloat(req.body.PURRAPVAL))
                request.input('PURRAPAMT', sql.Decimal(10, 2), parseFloat(req.body.PURRAPAMT))
                request.input('PURADDDISCRAP', sql.Decimal(10, 2), parseFloat(req.body.PURADDDISCRAP))
                request.input('PURADDDISCRAPVAL', sql.Decimal(10, 2), parseFloat(req.body.PURADDDISCRAPVAL))
                request.input('PURADDDISCRAPAMT', sql.Decimal(10, 2), parseFloat(req.body.PURADDDISCRAPAMT))
                request.input('PREMIUM', sql.Decimal(10, 2), parseFloat(req.body.PREMIUM))
                request.input('PREMIUMVAL', sql.Decimal(10, 2), parseFloat(req.body.PREMIUMVAL))
                request.input('PREMIUMAMT', sql.Decimal(10, 2), parseFloat(req.body.PREMIUMAMT))
                request.input('PURADDDISC', sql.Decimal(10, 2), parseFloat(req.body.PURADDDISC))
                request.input('PURADDDISCVAL', sql.Decimal(10, 2), parseFloat(req.body.PURADDDISCVAL))
                request.input('PURADDDISCAMT', sql.Decimal(10, 2), parseFloat(req.body.PURADDDISCAMT))
                request.input('NETRAPDISC', sql.Decimal(10, 2), parseFloat(req.body.NETRAPDISC))
                request.input('NETPRICEWT', sql.Decimal(10, 2), parseFloat(req.body.NETPRICEWT))
                request.input('NETPRICPCS', sql.Decimal(10, 2), parseFloat(req.body.NETPRICPCS))

                request = await request.execute('WB_Purchase_Bill_L_Save_Update');
                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.PurchaseLFillModel = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('TrnNo', sql.VarChar, req.body.TrnNo)
                request.input('SRNO', sql.Int, parseInt(req.body.SrNo))
                request = await request.execute('WB_Purchase_Bill_L_Fill_MODEL');

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
