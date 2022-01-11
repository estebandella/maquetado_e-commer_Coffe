const path = require('path');
const {validationResult} = require('express-validator');

//LEO DATA EN JSON:
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    // Controlador para la ruta index
    index: (req, res) => {       
        res.render('index', {products}); 
    },

    detail: (req, res) => {       
        console.log('Estoy en el detail############################################')
        const product = products.find(prod => prod.id == req.params.id);
        res.render('productDetail', {product, products}); 
    // },

    // login: (req, res) => {       
    //     console.log('Estoy en el login*****************************************')

    //     const product = products.find(prod => prod.id == req.params.id);
    //     res.render('login', {product, products}); 
    }

};

module.exports = mainController;