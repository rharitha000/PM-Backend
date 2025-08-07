const db=require('./db');
const Investment={

    getOverallSummary: (callback) => {
        const query = `
            SELECT 
                it.name AS category,
                SUM(t.quantity * t.price_per_unit) AS total
            FROM investments i
            JOIN investment_types it ON i.type_id = it.type_id
            JOIN transactions t ON t.investment_id = i.investment_id
            WHERE t.txn_type = 'BUY'
            GROUP BY it.name
        `;
        db.query(query, callback);
    },

    getPortfolioSummary: (callback) => {
        const query = `
            SELECT 
                i.category,
                SUM(t.units * t.price_at_time) AS invested_amount,
                SUM(t.units * COALESCE(lp.current_price, 0)) AS current_value
            FROM investments i
            LEFT JOIN transactions t ON i.id = t.investment_id
            LEFT JOIN (
                SELECT investment_id, current_price
                FROM live_prices
                GROUP BY investment_id
            ) lp ON i.id = lp.investment_id
            GROUP BY i.category;
        `;
        db.query(query, callback);
    },
    
    
    getAll: (callback) =>{
        db.query('SELECT * FROM investments',callback);
    },
    
    getByid: (id, callback) =>{
        db.query('SELECT * FROM investments WHERE type_id = ?', [id], callback);
    },
    create: (investment, callback) =>{
        db.query('INSERT INTO investments SET ?', investment, callback);
    },
    update: (id, investment, callback) =>{
        db.query('UPDATE investments SET ? WHERE investment_id = ?', [investment, id], callback);
    },
    getInvesmentType:(callback) =>{
        db.query('SELECT * FROM investment_types', callback);
    },
    getSubcategoriesByType: (typeId, callback) => {
        db.query('SELECT * FROM investment_subcategories WHERE type_id = ?', [typeId], callback);
    }
}

module.exports=Investment;