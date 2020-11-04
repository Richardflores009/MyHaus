const { Sequelize, Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/config');

class Tenant extends Model {}

Tenant.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    },
    comment_id: {
        type: DataTypes.STRING,
        reference: {
            model: 'comment',
            key: 'id'
        }
    },
    property_id: {
        type: DataTypes.STRING,
        reference: {
            model: 'property',
            key: 'id'
        }
    }
}, 
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tenant'
});

module.exports = Tenant;