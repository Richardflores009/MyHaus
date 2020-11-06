const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const Property = require('./Property');
const Comment = require('./Comment');

Property.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Property.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
})

Landlord.hasMany(Property, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
})

Landlord.hasMany(Comment, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
})

Tenant.hasMany(Comment, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
})

module.exports = {
    Landlord,
    Tenant,
    Property,
    Comment
};