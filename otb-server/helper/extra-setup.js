function applyAssociations(sequelize) {
	const { User, Customer, Booking, Contract } = sequelize.models;

    User.hasMany(Booking, {as: 'user', foreignKey: { fieldName: 'userId', allowNull: false}});
    Customer.hasMany(Booking, {as: 'customer', foreignKey: { fieldName: 'customerId', allowNull: false}});

    //Booking associations
    Booking.belongsTo(User, {as: 'user', foreignKey: { fieldName: 'userId', allowNull: false}});
    Booking.belongsTo(Customer, {as: 'customer', foreignKey: { fieldName: 'customerId', allowNull: false}});
    Booking.belongsTo(Contract, {as: 'contract', foreignKey: { fieldName: 'contractId', allowNull: false}});

    //Contract associations
    Contract.belongsTo(User, {as: 'user', foreignKey: { fieldName: 'userId', allowNull: false}});
    Contract.belongsTo(Customer, {as: 'customer', foreignKey: { fieldName: 'customerId', allowNull: false}});
    Contract.hasMany(Booking, {as: 'contract', foreignKey: { fieldName: 'contractId', allowNull: false}});
}

module.exports = { applyAssociations };