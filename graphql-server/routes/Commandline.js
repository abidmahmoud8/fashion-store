const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');

const CommandLine = require('../controllers/CommandLine');

router.get('/',  CommandLine.getAllCommandLine);
router.get('/:id',  CommandLine.getOneCommandLine);
router.post('/', multer, CommandLine.createCommandLine);
router.delete('/:id', CommandLine.deleteCommandLine);

let CommandLineRouter = router
module.exports = CommandLineRouter;
