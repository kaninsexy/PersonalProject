const express = require('express');
const router = express.Router();
const ItemController = require('../controller/Item');

router.get('/', ItemController.getItem);
router.post('/', ItemController.selectItem);
router.delete('/:item_id', ItemController.deleteItem);

module.exports = router;
