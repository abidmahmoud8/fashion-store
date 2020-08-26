let CRUD = require('../models/CRUD');
CRUD.table = 'items';


class Item {
    static getAllItem(req, res, next) {
        CRUD.getAll().then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getOneItem(req, res, next) {
        CRUD.getById(req.params.id)
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
        CRUD.insert({
            name : req.body.name,
            level : req.body.level,
            parent_id : req.body.parent_id,
            imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        })
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static modifyItem(req, res, next) {

    };

    static deleteItem(req, res, next) {
        CRUD.delete(req.params.id)
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

