const express = require('express');
const router = express.Router();
const ProductAll = require('../controller/Product');

router.get('/', ProductAll.getAllProduct);
router.get('/filter/:type', ProductAll.targetCategory);
router.get('/filter/:name', ProductAll.filterName);

module.exports = router;
