const express = require('express');
const router = express.Router();

const Command = require('../controllers/Command');

router.get('/',  Command.getAllCommand);
router.get('/:id',  Command.getOneCommand);
router.get('/us/:id',  Command.getCommandsByUser);
router.post('/', Command.createCommand);
router.put('/:id', Command.modifyCommand);
router.delete('/:id', Command.deleteCommand);

module.exports = router;
