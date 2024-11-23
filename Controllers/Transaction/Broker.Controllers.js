const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.BrokerFill = async (req, res) => {

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

exports.BrokerSave = async (req, res) => {

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
                request.input('Mobile_1_NO', sql.VarChar, req.body.Mobile_1_NO)
                request.input('Mobile_2_NO', sql.VarChar, req.body.Mobile_2_NO)
                request.input('Mobile_2_CC_Code_Name', sql.VarChar, req.body.Mobile_2_CC_Code_Name)
                request.input('Mobile_1_CC_Code_Name', sql.VarChar, req.body.Mobile_1_CC_Code_Name)
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
                request.input('Office_Country_Name', sql.VarChar, req.body.Office_Country_Name)
                request.input('Office_State_Name', sql.VarChar, req.body.Office_State_Name)
                request.input('Office_City_Name', sql.VarChar, req.body.Office_City_Name)
                request.input('Office_Zip', sql.VarChar, req.body.Office_Zip)
                request.input('Office_Map_Link', sql.VarChar, req.body.Office_Map_Link)
                request.input('Office_Phone', sql.VarChar, req.body.Office_Phone)
                request.input('Residence_Flat_No', sql.VarChar, req.body.Residence_Flat_No)
                request.input('Residence_Society', sql.VarChar, req.body.Residence_Society)
                request.input('Residence_Road', sql.VarChar, req.body.Residence_Road)
                request.input('Residence_Area', sql.VarChar, req.body.Residence_Area)
                request.input('Residence_Country_Name', sql.VarChar, req.body.Residence_Country_Name)
                request.input('Residence_State_Name', sql.VarChar, req.body.Residence_State_Name)
                request.input('Residence_City_Name', sql.VarChar, req.body.Residence_City_Name)
                request.input('Residence_Zip', sql.VarChar, req.body.Residence_Zip)
                request.input('Residence_Map_Link', sql.VarChar, req.body.Residence_Map_Link)
                request.input('Residence_Phone', sql.VarChar, req.body.Residence_Phone)
                request.input('ProfileImage', sql.VarChar, req.body.ProfileImage)
                request.input('EntryBy', sql.VarChar, req.body.EntryBy)
                request.input('C_Type', sql.VarChar, req.body.C_Type)
                request.input('P_Type', "")
                request.input('IsWhatsApp1', sql.Bit, 1)
                request.input('IsWhatsApp2', sql.Bit, 1)

                request = await request.execute('WB_Broker_Save_Update');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}

exports.BrokerDelete = async (req, res) => {

    jwt.verify(req.token, _tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;

            try {
                var request = new sql.Request();

                request.input('ClientID', sql.VarChar, req.body.ClientID)

                request = await request.execute('WB_Broker_Delete');

                res.json({ Success: 1, Data: '' })

            } catch (err) {
                res.json({ Success: 0, Data: err })
            }
        }
    });
}
