const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.MetalColorFill = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;

           try{
               var request  = new sql.Request();
               
               request = await request.execute('WB_MetalColMast_Fill');

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

exports.MetalColorSave = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;
           
           try{
               var request  = new sql.Request();
          
               request.input('M_Col_Code',sql.Int,parseInt(req.body.M_Col_Code))
               request.input('M_Col_Name',sql.VarChar,req.body.M_Col_Name)
               request.input('USERID',sql.VarChar,req.body.USERID)
               request.input('IsActive',sql.Bit,req.body.IsActive)
            
               request = await request.execute('WB_MetalColMast_Save_Update');

               res.json({Success:1,Data:''})

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}

exports.MetalColorDelete = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;
           
           try{
               var request  = new sql.Request();
            
               request.input('M_Col_Code',sql.Int,parseInt(req.body.M_Col_Code))
               request.input('USERID',sql.VarChar,req.body.USERID)
               
               request = await request.execute('WB_MetalColMast_Delete');

               res.json({Success:1,Data:''})

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}