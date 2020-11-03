const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const Property = require('./Property');
const Review = require('./Review');

Property.belongsTo(Landlord, {
    foreignKey: 'LandlordId',
    onDelete: 'CASCADE'
});

Property.hasMany(Tenant, {
    foreignKey: 'TenantId',
    onDelete: 'CASCADE'
});

Review.belongsTo(Landlord, {
    foreignKey: 'LandlordId',
    onDelete: 'CASCADE'
});

module.exports = {
    Landlord,
    Tenant,
    Property,
    Review
};