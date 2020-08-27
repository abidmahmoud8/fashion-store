let CommandLineModel = require('../models/CommandLineModel');
CommandLineModel.table = 'commandline'

class CommandLine {
    static getAllItem(req, res, next) {
        CommandLineModel.getAll().then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getOneItem(req, res, next) {
        CommandLineModel.getById(req.params.id)
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
        console.log(req.files);
        CommandLineModel.insert({
            title : req.body.title,
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

    };

    static deleteItem(req, res, next) {
        CommandLineModel.delete(req.params.id)
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

module.exports = CommandLine;

