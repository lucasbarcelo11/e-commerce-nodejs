const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Products = sequelize.define('products', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Products;