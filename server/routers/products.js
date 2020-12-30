const express = require('express');
const database = require('../config/database');

module.exports = function (app) {
    const router = express.Router();

    router.get('/', function (req, res, next) {
        database.Product.findAll()
            .then(results => {
                res.status(200).json(results);
            })
            .catch(error => {
                res.status(500).json(error);
            })
    });

    app.use('/products', router);
}
