const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.StyleMastFill = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;

           try{
               var request  = new sql.Request();
               
               request = await request.execute('WB_Style_Mast_Fill');

               if(request.recordset){
                   res.json({Success:1,Data:request.recordset})
               }else{
                   res.json({Success:0,Data:"Not Found"})
               }

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}

exports.CatagoryFillDrop = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;

           try{
               var request  = new sql.Request();
               
               request = await request.execute('WB_CategoryMast_Fill_Drop');

               if(request.recordset){
                   res.json({Success:1,Data:request.recordset})
               }else{
                   res.json({Success:0,Data:"Not Found"})
               }

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}

exports.StyleMastSave = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;
           
           try{
               var request  = new sql.Request();
          
               request.input('STYLE_ID',sql.Int,parseInt(req.body.STYLE_ID))
               request.input('CATEGORY_NAME',sql.VarChar,req.body.CATEGORY_NAME)
               request.input('NAME',sql.VarChar,req.body.NAME)
               request.input('USERID',sql.VarChar,req.body.USERID)
               request.input('ISACTIVE',sql.Bit,req.body.ISACTIVE)
            
               request = await request.execute('WB_Style_Mast_Save_Update');

               res.json({Success:1,Data:''})

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}

exports.StyleMastDelete = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;
           
           try{
               var request  = new sql.Request();
            
               request.input('STYLE_ID',sql.Int,parseInt(req.body.STYLE_ID))
               request.input('USERID',sql.VarChar,req.body.USERID)
               
               request = await request.execute('WB_Style_Mast_Delete');

               res.json({Success:1,Data:''})

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}