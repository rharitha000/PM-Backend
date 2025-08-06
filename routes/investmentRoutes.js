const express = require('express');
const router = express.Router();
let controller= require('../controller/investmentController');

router.get("/:id",controller.getInvestmentById)
router.get("/",controller.getAllInvestments)
router.post("/",controller.addInvestment)
router.put("/:id",controller.updateInvestment)
router.get("/types", controller.getTypes);
router.get("/subcategories/:typeId", controller.getSubcategories);

module.exports = router