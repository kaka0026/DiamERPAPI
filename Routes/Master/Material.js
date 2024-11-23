var express = require('express');
var router = express.Router();

var { verifyToken } = require('../../Config/verify/verify');
var _material = require('../../Controllers/Master/Material.Controllers');

router.post('/MaterialFill', verifyToken, _material.MaterialFill)
router.post('/MaterialSave', verifyToken, _material.MaterialSave)
router.post('/MaterialMastDelete', verifyToken, _material.MaterialMastDelete)
router.post('/MaterialMastCheck', verifyToken, _material.MaterialMastCheck)
router.post('/MaterialDDL', verifyToken, _material.MaterialDDL)

module.exports = router;