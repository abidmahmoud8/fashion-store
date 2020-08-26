const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');

const Category = require('../controllers/Category');

router.get('/',  Category.getAllCategory);
router.get('/recursive/',  Category.getRecursiveCategory);
router.get('/:id',  Category.getOneCategory);
router.post('/', multer, Category.createCategory);
router.delete('/:id', Category.deleteCategory);

module.exports = router;
