const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.SupplierFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('ClientID', sql.VarChar, req.body.ClientID)
                request.input('Name', sql.VarChar, req.body.Name)
                request.input('C_Type', sql.VarChar, req.body.C_Type)
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

exports.SpplierAdd = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();


                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('ID', sql.VarChar, req.body.ID)
                request = await request.execute('WB_Supplier_Address_Fill');
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

exports.SpplierKey = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();


                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('KPID', sql.VarChar, req.body.KPID)
                request = await request.execute('WB_KeyPersone_Details_Fill');
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

exports.SpplierBank = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();



                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('BID', sql.VarChar, req.body.BID)
                request = await request.execute('WB_Bank_Details_Fill');
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

exports.SupplierAddSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('ID', sql.Int, parseInt(req.body.ID))
                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('AddressType', sql.VarChar, req.body.AddressType)
                request.input('BuildingName', sql.VarChar, req.body.BuildingName)
                request.input('OfficeNumber', sql.VarChar, req.body.OfficeNumber)
                request.input('Road', sql.VarChar, req.body.Road)
                request.input('Area', sql.VarChar, req.body.Area)
                request.input('Country_Name', sql.VarChar, req.body.Country_Name)
                request.input('State_Name', sql.VarChar, req.body.State_Name)
                request.input('City_Name', sql.VarChar, req.body.City_Name)
                request.input('Zip', sql.VarChar, req.body.Zip)
                request.input('MapLink', sql.VarChar, req.body.Map_Link)

                request = await request.execute('WB_Address_Detail_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierBankSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('BID', sql.Int, parseInt(req.body.BID))
                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('BankName', sql.VarChar, req.body.BankName)
                request.input('AccountType', sql.VarChar, req.body.AccountType)
                request.input('IFSCCode', sql.VarChar, req.body.IFSCCode)
                request.input('AccountNumber', sql.VarChar, req.body.AccountNumber)
                request.input('BranchName', sql.VarChar, req.body.BranchName)
                request.input('BranchAddress', sql.VarChar, req.body.BranchAddress)

                request = await request.execute('WB_Bank_Detail_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierKeyPerSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('KPID', sql.Int, parseInt(req.body.KPID))
                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('Designation', sql.VarChar, req.body.Designation)
                request.input('Department', sql.VarChar, req.body.Department)
                request.input('FirstName', sql.VarChar, req.body.FirstName)
                request.input('LastName', sql.VarChar, req.body.LastName)
                request.input('Email_Type_1', sql.VarChar, req.body.Email_Type_1)
                request.input('Email_1', sql.VarChar, req.body.Email_1)
                request.input('Email_2', sql.VarChar, req.body.Email_2)
                request.input('Email_Type_2', sql.VarChar, req.body.Email_Type_2)
                request.input('Contact_Via_1', sql.VarChar, req.body.Contact_Via_1)
                request.input('Contact_Type_1', sql.VarChar, req.body.Contact_Type_1)
                request.input('Contact_1', sql.VarChar, req.body.Contact_1)
                request.input('IsWhatsApp_1', sql.Bit, req.body.IsWhatsApp_1)
                request.input('IsVerified_1', sql.Bit, req.body.IsVerified_1)
                request.input('Contact_Type_2', sql.VarChar, req.body.Contact_Type_2)
                request.input('Contact_Via_2', sql.VarChar, req.body.Contact_Via_2)
                request.input('Contact_2', sql.VarChar, req.body.Contact_2)
                request.input('IsWhatsApp_2', sql.Bit, req.body.IsWhatsApp_2)
                request.input('IsVerified_2', sql.Bit, req.body.IsVerified_2)
                request.input('Pan_No_KP', sql.VarChar, req.body.Pan_No_KP)
                request.input('Pan_Photo_KP', sql.VarChar, req.body.Pan_Photo_KP)



                request = await request.execute('WB_KeyPersone_Detail_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ID', sql.Int, parseInt(req.body.ID))
                request.input('ClientID', sql.VarChar, req.body.ClientID)
                request.input('Name', sql.VarChar, req.body.Name)
                request.input('Mobile_1_CC_Code', sql.VarChar, req.body.Mobile_1_CC_Code)
                request.input('Mobile_2_CC_Code', sql.VarChar, req.body.Mobile_2_CC_Code)
                request.input('Mobile_1_NO', sql.VarChar, req.body.Mobile_1_NO)
                request.input('Mobile_2_NO', sql.VarChar, req.body.Mobile_2_NO)
                request.input('BrokerName', sql.VarChar, req.body.BrokerName)
                request.input('Email1', sql.VarChar, req.body.Email1)
                request.input('Email2', sql.VarChar, req.body.Email2)
                request.input('PAN_NO', sql.VarChar, req.body.PAN_NO)
                request.input('PAN_PHOTO', sql.VarChar, req.body.PAN_PHOTO)
                request.input('GST_NO', sql.VarChar, req.body.GST_NO)
                request.input('GST_PHOTO', sql.VarChar, req.body.GST_PHOTO)
                request.input('PHOTO_ID_NO', sql.VarChar, req.body.PHOTO_ID_NO)
                request.input('PHOTO_ID_PHOTO', sql.VarChar, req.body.PHOTO_ID_PHOTO)
                request.input('Office_plot_Or_Office_No', sql.VarChar, req.body.Office_plot_Or_Office_No)
                request.input('Office_Society_Or_Apartment', sql.VarChar, req.body.Office_Society_Or_Apartment)
                request.input('Office_Road', sql.VarChar, req.body.Office_Road)
                request.input('Office_Area', sql.VarChar, req.body.Office_Area)
                request.input('Office_Country', sql.VarChar, req.body.Office_Country)
                request.input('Office_State', sql.VarChar, req.body.Office_State)
                request.input('Office_City', sql.VarChar, req.body.Office_City)
                request.input('Office_Zip', sql.VarChar, req.body.Office_Zip)
                request.input('Office_Map_Link', sql.VarChar, req.body.Office_Map_Link)
                request.input('Office_Phone', sql.VarChar, req.body.Office_Phone)
                request.input('Residence_Flat_No', sql.VarChar, req.body.Residence_Flat_No)
                request.input('Residence_Society', sql.VarChar, req.body.Residence_Society)
                request.input('Residence_Road', sql.VarChar, req.body.Residence_Road)
                request.input('Residence_Area', sql.VarChar, req.body.Residence_Area)
                request.input('Residence_Country', sql.VarChar, req.body.Residence_Country)
                request.input('Residence_State', sql.VarChar, req.body.Residence_State)
                request.input('Residence_City', sql.VarChar, req.body.Residence_City)
                request.input('Residence_Zip', sql.VarChar, req.body.Residence_Zip)
                request.input('Residence_Map_Link', sql.VarChar, req.body.Residence_Map_Link)
                request.input('Residence_Phone', sql.VarChar, req.body.Residence_Phone)
                request.input('ProfileImage', sql.VarChar, req.body.ProfileImage)
                request.input('EntryBy', sql.VarChar, req.body.EntryBy)
                request.input('C_Type', sql.VarChar, req.body.C_Type)
                request.input('P_Type', sql.VarChar, req.body.P_Type)
                request.input('IsWhatsApp1', sql.Bit, 1)
                request.input('IsWhatsApp2', sql.Bit, 1)



                request = await request.execute('WB_Supplier_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SupplierId', sql.VarChar, req.body.SupplierId)

                request = await request.execute('WB_Supplier_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierAddDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('ID', sql.Int, parseInt(req.body.ID))

                request = await request.execute('WB_Supplier_Address_delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierKeyDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('KPID', sql.Int, parseInt(req.body.KPID))

                request = await request.execute('WB_KeyPersone_Details_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.SupplierBankDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('SupplierId', sql.VarChar, req.body.SupplierId)
                request.input('BID', sql.Int, parseInt(req.body.BID))

                request = await request.execute('WB_Bank_Details_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.VerifySupplier = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('NAME', sql.VarChar(500), req.body.NAME)
                request.input('Type', sql.VarChar(500), req.body.Type)

                request = await request.execute('ufn_VerifySupplier');
                if (request.output) {
                    res.json({ success: 1, data: request.output[''] })
                } else {
                    res.json({ success: 0, data: "Not Found" })
                }

            } catch (err) {
                res.json({ success: 0, data: err })
            }
        }
    });
}