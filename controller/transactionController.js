const { connected } = require('process');
const Transaction=require('../models/transactionModel');

exports.getAllTransactions = (req, res) => {
    Transaction.getAll((error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error fetching transactions' });
        }
        res.status(200).json(results);
    });
}
exports.getTransactionByInvestmentId = (req, res) => {
    Transaction.getById(req.params.id, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error fetching transaction' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(result[0]);
    });
}

exports.addTransaction = (req, res) => {
    Transaction.create(req.body, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error adding transaction' });
        }
        res.status(201).json({ message: 'Transaction added successfully', id: result.insertId });
    });
}

exports.getPriceHistory = (req, res) => {
    const investmentId = req.params.investmentId;
    Transaction.getPriceHistory(investmentId, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error fetching price history' });
        }
        res.status(200).json(results);
    });
}

exports.addPriceHistory = (req, res) => {
    Transaction.addPriceHistory(req.body, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error adding price history' });
        }
        res.status(201).json({ message: 'Price history added successfully', id: result.insertId });
    });
}