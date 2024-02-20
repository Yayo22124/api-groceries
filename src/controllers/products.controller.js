import productDAO from "../dao/products.dao.js";

export const getAll = (req, res) => {
    productDAO.getAll()
        .then(products => res.render('../src/views/index', { products })).catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const getOne = (req, res) => {
    productDAO.getOne(req.params.barcode)
        .then(product => {
            !product ? res.json({
                message: "Product not found "
            }) : res.render('../src/views/edit', {product});
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const insertOne = (req, res) => {
    console.log(req.body)
    productDAO.insertOne(req.body)
        .then(result => res.redirect('/api/products/'))
        .catch(err => res.json({ status: "Server unavailable" }));
};

export const updateOne = (req, res) => {
    console.log(req.body)
    productDAO.updateOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message: "Product not found "
            }) : res.redirect('/api/products/');
        })
        .catch(err => res.json({ status: "Server unavailable" }));
};


export const deleteOne = (req, res) => {
    productDAO.deletetOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message: "Product not found "
            }) : res.redirect('/api/products');
        }).catch(err => res.json({ status: "Server unavailable" }));
};
