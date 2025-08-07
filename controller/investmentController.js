const Investment = require('../models/investmentModel')

exports.getOverallInvestments = (req, res) => {
    Investment.getOverallSummary((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error fetching investment summary" });
        }
        res.status(200).json(results);
    });
};
exports.getPortfolioSummary = (req, res) => {
    Investment.getPortfolioSummary((err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to fetch portfolio summary" });
        }
        res.status(200).json(result);
    });
};


exports.getAllInvestments = (req, res) => {
    Investment.getAll((error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ error: 'Error fetching investments' });
        }
        res.status(200).json(results);
    });
}

exports.getInvestmentById = (req, res) => {
    Investment.getByid(req.params.id, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ error: 'Error fetching investment' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Investment not found' });
        }
        res.status(200).json(result);
    })
}

exports.addInvestment = (req, res) => {
    Investment.create(req.body, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ error: 'Error adding investment' });
        }
        res.status(201).json({ message: 'Investment added successfully', id: result.insertId });
    });
}
exports.updateInvestment = (req, res) => {
    Investment.update(req.params.id, req.body, (error, result) => {
        if (error) {
            return res.status(500).json({ error: 'Error updating investment' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Investment not found' });
        }
        res.status(200).json({ message: 'Investment updated successfully' });
    });
}

exports.getTypes = (req, res) => {
    Investment.getInvesmentType((error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ error: 'Error fetching investment types' });
        }
        res.status(200).json(results);
    });
}

exports.getSubcategories= (req, res) => {
    const typeId = req.params.typeId;
    Investment.getSubcategoriesByType(typeId, (error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ error: 'Error fetching subcategories' });
        }
        res.status(200).json(results);
    });
}