let CategoryModel = require('../models/CategoryModel');
CategoryModel.table = 'categories'

function recursiveCategory(categories, parent) {
    var recurciveCategoryOutput = []
    categories.forEach(category => {
        if (category.parent_id == parent) {
            var children = recursiveCategory(categories, category.id)
            if (children.length) {
                category.children = children
            }
            recurciveCategoryOutput.push(category)
        }
    });
    return recurciveCategoryOutput
}


class Category {
    static getAllCategory(req, res, next) {
        CategoryModel.getAll().then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getOneCategory(req, res, next) {
        CategoryModel.getById(req.params.id)
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });

    };

    static createCategory(req, res, next) {
        CategoryModel.insert({
                name: req.body.name,
                level: req.body.level,
                gendre: req.body.gendre,
                parent_id: req.body.parent_id,
                imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
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

    static deleteCategory(req, res, next) {
        CategoryModel.delete(req.params.id)
            .then((thing) => {
                res.status(200).json(thing);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });
    };

    static getRecursiveCategory(req, res, next) {
        CategoryModel.getAll()
            .then((things) => {
                let tree = recursiveCategory(things)
                res.status(200).json(tree);
            })
            .catch((error) => {
                res.status(404).json({
                    error: error
                });
            });

    };
}

module.exports = Category;