const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.CategoryFill = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;

           try{
               var request  = new sql.Request();
               
               request = await request.execute('WB_CategoryMast_Fill');

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

exports.CategorySave = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;
           
           try{
               var request  = new sql.Request();
            
               request.input('Category_Id',sql.Int,parseInt(req.body.Category_Id))
               request.input('Category_Name',sql.VarChar,req.body.Category_Name)
               request.input('Initial',sql.VarChar,req.body.Initial)
               request.input('USERID',sql.VarChar,req.body.USERID)
               request.input('IsActive',sql.Bit,req.body.IsActive)
               
               request = await request.execute('WB_CatMast_Save_Update');

               res.json({Success:1,Data:''})

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}

exports.CategoryDelete = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;
           
           try{
               var request  = new sql.Request();
            
               request.input('Category_Id',sql.Int,parseInt(req.body.Category_Id))
               request.input('USERID',sql.VarChar,req.body.USERID)
            
               request = await request.execute('WB_CategoryMast_Delete');

               res.json({Success:1,Data:''})

           }catch(err){
               res.json({Success:0,Data:err})
           }
       }
   });
}
