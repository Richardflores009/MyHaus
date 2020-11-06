const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const Property = require('./Property');
const Comment = require('./Comment');

Property.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Tenant.belongsTo(Property, {
    foreignKey: 'property_id',
    onDelete: 'CASCADE'
})

Landlord.hasMany(Property, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
})

Property.hasMany(Tenant, {
    foreignKey: 'property_id',
    onDelete: 'CASCADE'
})


module.exports = {
    Landlord,
    Tenant,
    Property,
    Comment
};