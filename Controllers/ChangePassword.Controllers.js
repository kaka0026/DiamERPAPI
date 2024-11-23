const sql = require("mssql");
const jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");
var { _tokenSecret } = require('../Config/token/TokenConfig.json');

exports.OldPasswordCheck = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
        const TokenData = await authData;
           
            try{
                var request  = new sql.Request();
                request.input('UserId',sql.VarChar,req.body.UserID)
                request = await request.execute('WB_Check_User_Pass');
                var bytes  = CryptoJS.AES.decrypt(request.recordset[0].CurrentPassword, process.env.PASS_KEY);
                var originalText = bytes.toString(CryptoJS.enc.Utf8);


                var tyts  = CryptoJS.AES.decrypt('U2FsdGVkX1/3LSLIrITc/bq8tZHO8n8wiTOBVNfQ90U=', process.env.PASS_KEY);
                var text = tyts.toString(CryptoJS.enc.Utf8);
                if(req.body.OldPassowrd == originalText)
                {
                    res.json({Success:1,Data:''})
                }
                else{
                    res.json({Success:0,Data:''})
                }
            }catch(err){
                res.json({Success:0,Data:err})
            }
        }
   });
}

exports.ChangePassword = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;
           
            try{
                var request  = new sql.Request();
                request.input('UserId',sql.VarChar,req.body.UserID)
                request.input('NewPass',sql.VarChar,CryptoJS.AES.encrypt(req.body.NewPassowrd, process.env.PASS_KEY).toString())
                
                request = await request.execute('WB_Update_User_Pass');
                res.json({Success:1,Data:''})

            }catch(err){
                res.json({Success:0,Data:err})
            }
        }
    });
}