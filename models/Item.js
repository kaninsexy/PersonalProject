module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      qty: DataTypes.FLOAT,
    },
    {
      tableName: 'Item',
    }
  );
  Item.associate = (models) => {
    Item.belongsTo(models.Order, {
      foreignKey: 'order_id',
    });
    Item.belongsTo(models.Product, {
      foreignKey: 'product_id',
    });
  };
  return Item;
};
