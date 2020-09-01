let Item_CategoryModel = require('../models/Item_CategoryModel');
Item_CategoryModel.table = 'item_category'

class Item_Category {
    static getAllItem_Category(req, res, next) {
        Item_CategoryModel.getAll().then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getOneItem_Category(req, res, next) {
        Item_CategoryModel.getById(req.params.id)
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });

    };

    static createItem_Category(req, res, next) {
        console.log(req.files);
        Item_CategoryModel.insert({
            item_id: req.body.item_id,
            category_id: req.body.category_id

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

    static deleteItem_Category(req, res, next) {
        Item_CategoryModel.delete(req.params.id)
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

module.exports = Item_Category;

