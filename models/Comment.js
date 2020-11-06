const { Sequelize, Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
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
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
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