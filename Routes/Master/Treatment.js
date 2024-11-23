var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _treatment = require('../../Controllers/Master/Treatment.Controllers');

router.post('/TreatmentMastFill', verifyToken, _treatment.TreatmentMastFill)
router.post('/TreatmentMastSave', verifyToken, _treatment.TreatmentMastSave)
router.post('/TreatmentMastDelete', verifyToken, _treatment.TreatmentMastDelete)
router.post('/TreatmentMastCheck', verifyToken, _treatment.TreatmentMastCheck)

module.exports = router;