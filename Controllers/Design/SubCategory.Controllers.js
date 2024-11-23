const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../../Config/token/TokenConfig.json');

exports.SubCategoryFill = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
       if (err) {
           res.sendStatus(401);
       } else {
           const TokenData = await authData;

           try{
               var request  = new sql.Request();
               
               request = await request.execute('WB_SubCategoryMast_Fill');

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


exports.SubCategorySave = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;
            
            try{
                var request  = new sql.Request();
                
                request.input('Sub_Category_Id',sql.Int,parseInt(req.body.Sub_Category_Id))
                request.input('Sub_Category_Name',sql.VarChar,req.body.Sub_Category_Name)
                request.input('Category_Name',sql.VarChar,req.body.Category_Name)
                request.input('USERID',sql.VarChar,req.body.USERID)
                request.input('IsActive',sql.Bit,req.body.IsActive)
                
               request = await request.execute('WB_SubCatMast_Save_Update');
               
               res.json({Success:1,Data:''})

            }catch(err){
                res.json({Success:0,Data:err})
            }
        }
    });
}

exports.SubCategoryDelete = async(req,res) => {
    
    jwt.verify(req.token,_tokenSecret, async (err, authData) => {
        if (err) {
            res.sendStatus(401);
        } else {
            const TokenData = await authData;
            
            try{
               var request  = new sql.Request();
               
               request.input('Sub_Category_Id',sql.Int,parseInt(req.body.Sub_Category_Id))
            request.input('USERID',sql.VarChar,req.body.USERID)
               
               request = await request.execute('WB_SubCategoryMast_Delete');

               res.json({Success:1,Data:''})
               
           }catch(err){
               res.json({Success:0,Data:err})
            }
        }
    });
}

exports.CategoryDDL = async(req,res) => {

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