module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'customer',
    }
  );
  Customer.associate = (models) => {
    Customer.hasMany(models.Order, { foreignKey: 'customer_id' });
  };
  return Customer;
};
