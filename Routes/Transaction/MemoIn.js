var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _memoIn = require('../../Controllers/Transaction/MemoIn.Controllers');

router.post('/MemoInView', verifyToken, _memoIn.MemoInView)
router.post('/MaterialFillbyMemoName', verifyToken, _memoIn.MaterialFillbyMemoName)
router.post('/MemoInProcess', verifyToken, _memoIn.MemoInProcess)
router.post('/UpdateMemoInProcess', verifyToken, _memoIn.UpdateMemoInProcess)
router.post('/GetNewTrnNo', verifyToken, _memoIn.GetNewTrnNo)
router.post('/MemoHSave', verifyToken, _memoIn.MemoHSave)
router.post('/MemoLDelete', verifyToken, _memoIn.MemoLDelete)
router.post('/GetMemoFill', verifyToken, _memoIn.GetMemoFill)
router.post('/MemoCalculation', verifyToken, _memoIn.MemoCalculation)
router.post('/MemoHInView', verifyToken, _memoIn.MemoHInView)
router.post('/MemoSaveCSImm', verifyToken, _memoIn.MemoSaveCSImm)
router.post('/GetShapebyMaterial', verifyToken, _memoIn.GetShapebyMaterial)
router.post('/GetOriginbyMaterial', verifyToken, _memoIn.GetOriginbyMaterial)
router.post('/GetClaritybyMaterial', verifyToken, _memoIn.GetClaritybyMaterial)
router.post('/GetColorbyMaterial', verifyToken, _memoIn.GetColorbyMaterial)
router.post('/GetIntensitybyMaterial', verifyToken, _memoIn.GetIntensitybyMaterial)
router.post('/GetOverTonebyMaterial', verifyToken, _memoIn.GetOverTonebyMaterial)
router.post('/GetSizebyMaterial', verifyToken, _memoIn.GetSizebyMaterial)
router.post('/MemoHDelete', verifyToken, _memoIn.MemoHDelete)
router.post('/AllMemoLFill', verifyToken, _memoIn.AllMemoLFill)
router.post('/GetOrgRap', verifyToken, _memoIn.GetOrgRap)
router.post('/GetTrnFlagDetail', verifyToken, _memoIn.GetTrnFlagDetail)
router.post('/GetTrnFlagSaveCarat', verifyToken, _memoIn.GetTrnFlagSaveCarat)

module.exports = router;