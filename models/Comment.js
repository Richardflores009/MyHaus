const { Sequelize, Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init({
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tenant_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tenant',
            key: 'id'
        }
    },
    landlord_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'landlord',
            key: 'id'
        }
    }
}, 
{
    sequelize,
    timestamps: false,
    freezeTableName:true,
    underscored: true,
    modelName: 'comment'
}
);

module.exports = Comment;