var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _blackWhite = require('../../Controllers/DesignOperation/BlackWhite.Controllers');

router.post('/BlackWhiteFill', verifyToken, _blackWhite.BlackWhiteFill)
router.post('/BlackWhiteFillById', verifyToken, _blackWhite.BlackWhiteFillById)
router.post('/DesignerFill', verifyToken, _blackWhite.DesignerFill)
router.post('/GetNewDesignCode', verifyToken, _blackWhite.GetNewDesignCode)
router.post('/FillSubCategoryDrop', verifyToken, _blackWhite.FillSubCategoryDrop)
router.post('/BlackWhiteSave', verifyToken, _blackWhite.BlackWhiteSave)
router.post('/BlackWhiteDelete', verifyToken, _blackWhite.BlackWhiteDelete)
router.post('/DesignerMastFill', verifyToken, _blackWhite.DesignerMastFill)
router.post('/SubCategoryByCategoryIDFill', verifyToken, _blackWhite.SubCategoryByCategoryIDFill)
router.post('/DesignCodeFill', verifyToken, _blackWhite.DesignCodeFill)
router.post('/upload', verifyToken, _blackWhite.upload)

module.exports = router;