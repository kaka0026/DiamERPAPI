const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.ClientFill = async (req, res) => {

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

                request = await request.execute('WB_ClientDirectory_Fill_New');
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

exports.ClientSave = async (req, res) => {

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
                request.input('Designation', sql.VarChar, req.body.Designation)
                request.input('Mobile_CC_Code_Name', sql.VarChar, req.body.Mobile_CC_Code_Name)
                request.input('MobileNo', sql.VarChar, req.body.MobileNo)

                request = await request.execute('WB_Client_contact_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.ClientDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ClientID', sql.VarChar, req.body.ClientID)

                request = await request.execute('WB_Client_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.ClientContactDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ID', sql.VarChar, req.body.ID)

                request = await request.execute('WB_Client_contact_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.ContryExtnoFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_COUNTRY_EXTNO_FILL');

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

exports.ContryFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_COUNTRY_FILL');

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

exports.GetEaringStyle = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Earrings_Data_Fill_Drop');

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

exports.GetNecklaceStyle = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request = await request.execute('WB_Necklace_Data_Fill_Drop');

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

exports.getClientDetailGrid = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ClientID', sql.VarChar, req.bodyClientID)

                request = await request.execute('WB_GET_CLIENTDETAIL');

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

exports.StateFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;
            try {
                var request = new sql.Request();
                request.input('CON_CODE', sql.VarChar, req.body.CON_NAME)

                request = await request.execute('WB_REGION_FILL');
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

exports.CityFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('CON_CODE', sql.VarChar, req.body.CONNAME)
                request.input('REG_CODE', sql.VarChar, req.body.REGCODE)

                request = await request.execute('WB_CITY_FILL');
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

exports.GetUserCode = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('name', sql.VarChar, req.body.name)
                request.input('Type', sql.VarChar, req.body.Type)

                request = await request.execute('Usp_getUserCode');
                res.json({ Success: 1, Data: request.recordset })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.ZipCodeFill = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('CITY_CODE', sql.VarChar, req.body.CITY_CODE)

                request = await request.execute('WB_ZIPCODE_FILL');

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

exports.ZipCodeFillstart = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ZIP_CODE', sql.VarChar, req.body.ZIP_CODE)

                request = await request.execute('WB_ZIPCODE_FILL');

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

exports.FUllClientDetailSave = async (req, res) => {

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
                request.input('ContactPersonDOB', sql.VarChar, req.body.ContactPersonDOB)
                request.input('Maritial', sql.VarChar, req.body.Maritial)
                request.input('AnniversaryDate', sql.VarChar, req.body.AnniversaryDate)
                request.input('SpouseName', sql.VarChar, req.body.SpouseName)
                request.input('SpouseNameDOB', sql.VarChar, req.body.SpouseNameDOB)
                request.input('Mobile_1_CC_Code_Name', sql.VarChar, req.body.Mobile_1_CC_Code_Name)
                request.input('Mobile_1_NO', sql.VarChar, req.body.Mobile_1_NO)
                request.input('Mobile_2_CC_Code_Name', sql.VarChar, req.body.Mobile_2_CC_Code_Name)
                request.input('Mobile_2_NO', sql.VarChar, req.body.Mobile_2_NO)
                request.input('Email1', sql.VarChar, req.body.Email1)
                request.input('Email2', sql.VarChar, req.body.Email2)
                request.input('Gender', sql.VarChar, req.body.Gender)
                request.input('PAN_NO', sql.VarChar, req.body.PAN_NO)
                request.input('PAN_PHOTO', sql.VarChar, req.body.PAN_PHOTO)
                request.input('GST_NO', sql.VarChar, req.body.GST_NO)
                request.input('GST_PHOTO', sql.VarChar, req.body.GST_PHOTO)
                request.input('PHOTO_ID_NO', sql.VarChar, req.body.PHOTO_ID_NO)
                request.input('PHOTO_ID_PHOTO', sql.VarChar, req.body.PHOTO_ID_PHOTO)
                request.input('Left_Thumb', sql.VarChar, req.body.Left_Thumb)
                request.input('Left_Index', sql.VarChar, req.body.Left_Index)
                request.input('Left_Middle', sql.VarChar, req.body.Left_Middle)
                request.input('Left_Ring', sql.VarChar, req.body.Left_Ring)
                request.input('Left_Pinky', sql.VarChar, req.body.Left_Pinky)
                request.input('Right_Thumb', sql.VarChar, req.body.Right_Thumb)
                request.input('Right_Index', sql.VarChar, req.body.Right_Index)
                request.input('Right_Middle', sql.VarChar, req.body.Right_Middle)
                request.input('Right_Ring', sql.VarChar, req.body.Right_Ring)
                request.input('Right_Pinky', sql.VarChar, req.body.Right_Pinky)
                request.input('Bangle_Openable', sql.VarChar, req.body.Bangle_Openable)
                request.input('Necklace_Around_the_Neck', sql.VarChar, req.body.Necklace_Around_the_Neck)
                request.input('Bracelet', sql.VarChar, req.body.Bracelet)
                request.input('Choker', sql.VarChar, req.body.Choker)
                request.input('DiamondColor', sql.VarChar, req.body.DiamondColor)
                request.input('DiamondClarity', sql.VarChar, req.body.DiamondClarity)
                request.input('EaringStyle', sql.VarChar, req.body.EaringStyle)
                request.input('NecklaceStyle', sql.VarChar, req.body.NecklaceStyle)
                request.input('ProfileImage', sql.VarChar, req.body.ProfileImage)
                request.input('EntryBy', sql.VarChar, req.body.EntryBy)
                request.input('C_Type', sql.VarChar, req.body.C_Type)
                request.input('P_Type', sql.VarChar, req.body.P_Type)
                request.input('Unit', sql.VarChar, req.body.Unit)
                request.input('PHOTO_ID_TYPE', sql.VarChar, req.body.PHOTO_ID_TYPE)
                request.input('Prefix', sql.VarChar, req.body.Prefix)
                request.input('MiddleName', sql.VarChar, req.body.MiddleName)
                request.input('LastName', sql.VarChar, req.body.LastName)
                request.input('NickName', sql.VarChar, req.body.NickName)
                request.input('ADHAR_NO', sql.VarChar, req.body.ADHAR_NO)
                request.input('ADHAR_ID_PHOTO', sql.VarChar, req.body.ADHAR_ID_PHOTO)
                request.input('Bangle_Fixed', sql.VarChar, req.body.Bangle_Fixed)
                request.input('Long', sql.VarChar, req.body.Long)
                request.input('DiamondShape', sql.VarChar, req.body.DiamondShape)
                request.input('StyleOfjewellary', sql.VarChar, req.body.StyleOfjewellary)
                request.input('MobileVerify', sql.VarChar, req.body.MobileVerify)
                request.input('EmailVerify', sql.VarChar, req.body.EmailVerify)

                request = await request.execute('WB_Client_Save_Update_New');
                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.GetSupplierNameBrokerWiser = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();
                request.input('BrokerName', sql.VarChar, req.body.BrokerName)

                request = await request.execute('WB_GetSupplierNameBrokerWise');

                res.json({ Success: 1, Data: request.recordset })
            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.ClientAdd = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ID', sql.Int, parseInt(req.body.ID))
                request.input('ClientID', sql.VarChar, req.body.ClientID)
                request.input('primary', sql.Bit, req.body.primary)

                request = await request.execute('WB_Client_Address_Fill');

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

exports.ClientAddSave = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ID', sql.Int, parseInt(req.body.ID))
                request.input('ClientID', sql.VarChar, req.body.ClientID)
                request.input('Address_Name', sql.VarChar, req.body.Address_Name)
                request.input('Address', sql.VarChar, req.body.Address)
                request.input('Apartment_OP', sql.VarChar, req.body.Apartment_OP)
                request.input('Country_Name', sql.VarChar, req.body.Country_Name)
                request.input('State_Name', sql.VarChar, req.body.State_Name)
                request.input('City_Name', sql.VarChar, req.body.City_Name)
                request.input('Zip', sql.VarChar, req.body.Zip)
                request.input('primary', sql.Bit, req.body.primary)

                request = await request.execute('WB_Client_Address_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.ClientAddDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ClientID', sql.VarChar, req.body.ClientID)
                request.input('ID', sql.Int, parseInt(req.body.ID))

                request = await request.execute('WB_Client_Address_delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}