const Order = require('../models/order');

// CRUD Controllers

//get all Orders
exports.getOrders = (req, res, next) => {
    Order.findAll()
        .then(orders => {
            res.status(200).json({ orders: orders });
        })
        .catch(err => console.log(err));
}

//get Order by id
exports.getOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    Order.findByPk(orderId)
        .then(order => {
            if (!order) {
                return res.status(404).json({ message: 'Order not found!' });
            }
            res.status(200).json({ order: order });
        })
        .catch(err => console.log(err));
}

//create Order
exports.createOrder = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const product_name = req.body.product_name;
  const quantity = req.body.quantity;
  const order_date = req.body.order_date;
  const priority = req.body.priority;
  Order.create({
    name: name,
    email: email,
    address: address,
    product_name: product_name,
    quantity: quantity,
    order_date: order_date,
    priority: priority
  })
    .then(result => {
      console.log('Created Order');
      res.status(201).json({
        message: 'Order created successfully!',
        Order: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}

//update Order
exports.updateOrder = (req, res, next) => {
  const orderId = req.params.orderId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedAddress = req.body.address;
  const updatedProduct_Name = req.body.product_name;
  const updatedQuantity = req.body.quantity;
  const updatedOrder_Date = req.body.order_date;
  const updatedPriority = req.body.priority;
  Order.findByPk(orderId)
    .then(order => {
      if (!order) {
        return res.status(404).json({ message: 'Order not found!' });
      }
      order.name = updatedName;
      order.email = updatedEmail;
      order.address = updatedAddress;
      order.product_name = updatedProduct_Name;
      order.quantity = updatedQuantity;
      order.order_date = updatedOrder_Date;
      order.priority = updatedPriority;
      return order.save();
    })
    .then(result => {
      res.status(200).json({message: 'Order updated!', order: result});
    })
    .catch(err => console.log(err));
}

//delete Order
exports.deleteOrder = (req, res, next) => {
  const orderId = req.params.orderId;
  Order.findByPk(orderId)
    .then(order => {
      if (!order) {
        return res.status(404).json({ message: 'Order not found!' });
      }
      return Order.destroy({
        where: {
          id: orderId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Order deleted!' });
    })
    .catch(err => console.log(err));
}

