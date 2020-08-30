let CommandLineModel = require('../models/CommandLineModel');
CommandLineModel.table = 'commandline'

class CommandLine {
    static getAllCommandLine(req, res, next) {
        CommandLineModel.getAll().then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getOneCommandLine(req, res, next) {
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

    static createCommandLine(req, res, next) {
        console.log(req.files);
        CommandLineModel.insert({
            command_id: req.body.command_id,
            item_id: req.body.item_id,
            item_name: req.body.item_name,
            item_qte: req.body.item_qte,
            item_price: req.body.item_price,
            item_discount: req.body.item_discount,
            item_total_price: req.body.item_total_price,

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


    static deleteCommandLine(req, res, next) {
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

