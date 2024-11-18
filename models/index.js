// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category);

// Categories have many Products

Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Category, {
  through: ProductTag,
  foreignKey: 'product_id',
  otherKey: 'tag_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product), {
  through: ProductTag, // Define the join model
  foreignKey: 'tag_id', 
  otherKey: 'product_id', 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
