var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _colorDesign = require('../../Controllers/DesignOperation/ColorDesign.Controllers');

router.post('/ColorDesignFillById', verifyToken, _colorDesign.ColorDesignFillById)
router.post('/ShapeByMaterialId', verifyToken, _colorDesign.ShapeByMaterialId)
router.post('/SaveDimMaterial', verifyToken, _colorDesign.SaveDimMaterial)
router.post('/GetSubDesignCode', verifyToken, _colorDesign.GetSubDesignCode)
router.post('/FillDimMaterial', verifyToken, _colorDesign.FillDimMaterial)
router.post('/SaveDisignColorDesign', verifyToken, _colorDesign.SaveDisignColorDesign)
router.post('/FillColorDesign', verifyToken, _colorDesign.FillColorDesign)
router.post('/RemoveImage', verifyToken, _colorDesign.RemoveImage)
router.post('/RemoveDesign', verifyToken, _colorDesign.RemoveDesign)

module.exports = router;