const db=require('./db');
const Investment={
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