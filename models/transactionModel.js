const db=require('./db');

const Transaction = {
    getAll: (callback) => {
        db.query('SELECT * FROM transactions', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM transactions WHERE txn_id = ?', [id], callback);
    },
    create: (transaction, callback) => {
        db.query('INSERT INTO transactions SET ?', transaction, callback);
    },
    getPriceHistory: (investmentId, callback) => {
        db.query('SELECT * FROM price_history WHERE investment_id = ?', [investmentId], callback);
    },
    addPriceHistory: (priceData, callback) => {
        db.query('INSERT INTO price_history SET ?', priceData, callback);
    }
}

module.exports = Transaction;