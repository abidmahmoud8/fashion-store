const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');

const Item = require('../controllers/Item');

router.get('/',  Item.getAllItem);
router.get('/:id',  Item.getOneItem);
router.post('/', multer, Item.createItem);
// router.put('/:id', Item.deleteItem);
router.delete('/:id', Item.deleteItem);

module.exports = router;
