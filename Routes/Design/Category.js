var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _category = require('../../Controllers/Design/Category.Controllers');

router.post('/CategoryFill', verifyToken, _category.CategoryFill)
router.post('/CategorySave', verifyToken, _category.CategorySave)
router.post('/CategoryDelete', verifyToken, _category.CategoryDelete)



module.exports = router;