var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _subCategory = require('../../Controllers/Design/SubCategory.Controllers');

router.post('/SubCategoryFill', verifyToken, _subCategory.SubCategoryFill)
router.post('/CategoryDDL', verifyToken, _subCategory.CategoryDDL)
router.post('/SubCategorySave', verifyToken, _subCategory.SubCategorySave)
router.post('/SubCategoryDelete', verifyToken, _subCategory.SubCategoryDelete)



module.exports = router;