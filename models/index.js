const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const Property = require('./Property');
const Comment = require('./Comment');

Property.belongsTo(Landlord, {
    foreignKey: 'landlordId',
    onDelete: 'CASCADE'
});


Landlord.hasMany(Property, {
    foreignKey: 'landlordId',
    onDelete: 'CASCADE'
});



Landlord.hasMany(Comment, {
    foreignKey: 'landlordId',
    onDelete: 'CASCADE'
});

Tenant.hasMany(Comment, {
    foreignKey: 'tenantId',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Landlord, {
    foreignKey: 'landlordId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Tenant, {
    foreignKey: 'tenantId',
    onDelete: 'CASCADE'
});

module.exports = {
    Landlord,
    Tenant,
    Property,
    Comment
};