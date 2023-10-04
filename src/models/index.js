const Cart = require("./Cart");
const Category = require("./Category");
const Image = require("./Image");
const Products = require("./Products");
const Purchase = require("./Purchase");
const User  = require('./User')

Category.hasMany(Products)
Products.belongsTo(Category)

Products.hasMany(Image)
Image.belongsTo(Products)

User.hasMany(Cart)
Cart.belongsTo(User)

Products.hasMany(Cart)
Cart.belongsTo(Products)

Products.hasMany(Purchase)
Purchase.belongsTo(Products)

User.hasMany(Purchase)
Purchase.belongsTo(User)