const express = require('express')
const router = express.Router()
let controller = require('../controller/transactionController')

router.get("/:id", controller.getTransactionByInvestmentId)
router.get("/", controller.getAllTransactions)
router.post("/", controller.addTransaction)
router.get("/price-history/:investmentId", controller.getPriceHistory)
router.post("/price-history", controller.addPriceHistory)

module.exports = router