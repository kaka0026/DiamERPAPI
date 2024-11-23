var express = require('express');
var router = express.Router();

var Login = require('./Routes/Login')
var ChangePassword = require('./Routes/ChangePassword')
var Permission = require('./Routes/Access/Permission')
var Category = require('./Routes/Design/Category')
var MetalColor = require('./Routes/Design/MetalColor')
var StyleMast = require('./Routes/Design/StyleMast')
var SubCategory = require('./Routes/Design/SubCategory')
var BlackWhite = require('./Routes/DesignOperation/BlackWhite')
var ColorDesign = require('./Routes/DesignOperation/ColorDesign')
var Department = require('./Routes/HR/Department')
var Designation = require('./Routes/HR/Designation')
var Employee = require('./Routes/HR/Employee')
var Location = require('./Routes/HR/Location')
var ClarityMast = require('./Routes/Master/ClarityMast')
var ColorMast = require('./Routes/Master/ColorMast')
var OverToneMast = require('./Routes/Master/OverToneMast')
var IntensityMast = require('./Routes/Master/IntensityMast')
var FinishMast = require('./Routes/Master/FinishMast')
var FluorescenceMast = require('./Routes/Master/FluorescenceMast')
var IncCat = require('./Routes/Master/IncCat')
var InclusionMast = require('./Routes/Master/InclusionMast')
var KTMast = require('./Routes/Master/KTMast')
var PurchaseType = require('./Routes/Master/purmast')
var LabMast = require('./Routes/Master/LabMast')
var MMMast = require('./Routes/Master/MMMast')
var Material = require('./Routes/Master/Material')
var MaterialCat = require('./Routes/Master/MaterialCat')
var Origin = require('./Routes/Master/Origin')
var ShapeMast = require('./Routes/Master/ShapeMast')
var SizeMast = require('./Routes/Master/SizeMast')
var TrackMast = require('./Routes/Master/TrackMast')
var Treatment = require('./Routes/Master/Treatment')
var Broker = require('./Routes/Transaction/Broker')
var Client = require('./Routes/Transaction/Client')
var Link = require('./Routes/Transaction/Link')
var MemoIn = require('./Routes/Transaction/MemoIn')
var OrderEntry = require('./Routes/Transaction/OrderEntry')
var Purchase = require('./Routes/Transaction/Purchase')
var Supplier = require('./Routes/Transaction/Supplier')


router.use('/Login', Login);
router.use('/ChangePassword', ChangePassword);
router.use('/Permission', Permission);
router.use('/Category', Category);
router.use('/MetalColor', MetalColor);
router.use('/StyleMast', StyleMast);
router.use('/SubCategory', SubCategory);
router.use('/BlackWhite', BlackWhite);
router.use('/ColorDesign', ColorDesign);
router.use('/Department', Department);
router.use('/Designation', Designation);
router.use('/Employee', Employee);
router.use('/Location', Location);
router.use('/ClarityMast', ClarityMast);
router.use('/ColorMast', ColorMast);
router.use('/IntensityMast', IntensityMast);
router.use('/OverToneMast', OverToneMast);
router.use('/FinishMast', FinishMast);
router.use('/FluorescenceMast', FluorescenceMast);
router.use('/IncCat', IncCat);
router.use('/InclusionMast', InclusionMast);
router.use('/KTMast', KTMast);
router.use('/PurchaseType', PurchaseType);
router.use('/LabMast', LabMast);
router.use('/MMMast', MMMast);
router.use('/Material', Material);
router.use('/MaterialCat', MaterialCat);
router.use('/Origin', Origin);
router.use('/ShapeMast', ShapeMast);
router.use('/SizeMast', SizeMast);
router.use('/TrackMast', TrackMast);
router.use('/Treatment', Treatment);
router.use('/Broker', Broker);
router.use('/Client', Client);
router.use('/Link', Link);
router.use('/MemoIn', MemoIn);
router.use('/OrderEntry', OrderEntry);
router.use('/Purchase', Purchase);
router.use('/Supplier', Supplier);

module.exports = router;