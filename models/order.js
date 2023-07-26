const Sequelize = require('sequelize');
const db = require('../util/database');
const sequelize = require('sequelize');

const Order = db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    product_name: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    order_date: Sequelize.STRING,
    priority: Sequelize.STRING
});

module.exports = Order;
