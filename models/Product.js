module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      stock: DataTypes.FLOAT,
      type: DataTypes.STRING,
    },
    {
      tableName: 'product',
      timestamps: false,
    }
  );
  Product.associate = (models) => {
    Product.hasMany(models.Item, {
      foreignKey: 'product_id',
    });
  };
  return Product;
};
