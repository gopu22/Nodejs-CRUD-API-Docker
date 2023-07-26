const controller = require('../controllers/orders');
const router = require('express').Router();

// CRUD Routes /orders
router.get('/', controller.getOrders);
router.get('/:orderId', controller.getOrder);
router.post('/', controller.createOrder);
router.put('/:orderId', controller.updateOrder);
router.delete('/:orderId', controller.deleteOrder);

module.exports = router;
