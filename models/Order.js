module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      order_date: DataTypes.DATE,
    },
    {
      tableName: 'order',
    }
  );
  Order.associate = (models) => {
    Order.belongsTo(models.Customer, { foreignKey: 'customer_id' });
    Order.hasMany(models.Product, {
      foreignKey: 'order_id',
    });
  };
  return Order;
};
