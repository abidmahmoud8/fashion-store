let CommandModel = require('../models/CommandModel');
CommandModel.table = 'command'

class Command {
    static getAllCommand(req, res, next) {
        CommandModel.getAll().then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getOneCommand(req, res, next) {
        CommandModel.getById(req.params.id)
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });

    };
    static getCommandsByUser(req, res, next) {
        CommandModel.getByUser(req.params.id)
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });

    };

    static createCommand(req, res, next) {
        CommandModel.insert({
                status: req.body.status,
                user_id: req.body.user_id,
                payement: req.body.payement,
                total_price: req.body.total_price,
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

    static modifyCommand(req, res, next) {
        CommandModel.update(req.params.id, {
                status: req.body.status,
                payement: req.body.payement,
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

    static deleteCommand(req, res, next) {
        CommandModel.delete(req.params.id)
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

module.exports = Command;