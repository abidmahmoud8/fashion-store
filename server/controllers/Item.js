let ItemModel = require('../models/ItemModel');
ItemModel.table = 'items'

class Item {
    static getAllItem(req, res, next) {
        ItemModel.getAll().then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getOneItem(req, res, next) {
        ItemModel.getById(req.params.id)
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });

    };

    static createItem(req, res, next) {
        ItemModel.insert({
            title : req.body.title,
            gendre : req.body.gendre,
            colors: req.body.colors,
            sizes : req.body.sizes,
            quantities: req.body.quantities,
            discount: req.body.discount,
            short_description: req.body.short_description,
            long_description: req.body.long_description,
            price: req.body.price,
            images : JSON.stringify(req.files),

        }).then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                console.log(error);
                res.status(404).json({
                    error: error
                });
            });
    };

    static modifyItem(req, res, next) {
        ItemModel.update(req.body.id,{
            id:req.body.id,
            title : req.body.title,
            gendre : req.body.gendre,
            colors: req.body.colors,
            sizes : req.body.sizes,
            quantities: req.body.quantities,
            discount: req.body.discount,
            short_description: req.body.short_description,
            long_description: req.body.long_description,
            price: req.body.price,

        }).then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                console.log(error);
                res.status(404).json({
                    error: error
                });
            });

    };

    static deleteItem(req, res, next) {
        ItemModel.delete(req.params.id)
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

}

module.exports = Item;

