const express = require('express');
const router = express.Router();

const Item_Category = require('../controllers/Item_Category');

router.get('/',  Item_Category.getAllItem_Category);
router.get('/:id',  Item_Category.getOneItem_Category);
router.post('/', Item_Category.createItem_Category);
router.delete('/:id', Item_Category.deleteItem_Category);

let Item_CategoryRouter = router
module.exports = Item_CategoryRouter;
