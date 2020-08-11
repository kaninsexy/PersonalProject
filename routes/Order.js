const express = require('express');
const router = express.Router();
const OrderController = require('../controller/Order');

router.get('/', OrderController.getOrder);
router.post('/order', OrderController.selectOrder);
router.patch('/order', OrderController.editOrder);
router.delete('/order/:order_id', OrderController.deleteOrder);

module.exports = router;
