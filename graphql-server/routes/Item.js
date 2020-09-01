const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-multi-config');

const Item = require('../controllers/Item');

router.get('/',  Item.getAllItem);
router.get('/:id',  Item.getOneItem);
router.get('/cat/:id',  Item.getItemsByCategory);
router.post('/',multer, Item.createItem);
router.put('/:id', Item.modifyItem);
router.put('/qte/:id', Item.modifyItemQte);
router.delete('/:id', Item.deleteItem);

module.exports = router;
