const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const Property = require('./Property');
const Comment = require('./Comment');
const Post = require('./Post');

Property.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

Property.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Landlord.hasMany(Post, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
})

Tenant.hasMany(Post, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(Tenant, {
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
    Comment,
    Post
};