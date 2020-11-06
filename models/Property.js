const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Property extends Model {}

Property.init({
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    pet: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    maintenance: {
        type: Sequelize.BOOLEAN,
        defaultValue: false

    },
    address: DataTypes.STRING,
    description: DataTypes.STRING,
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'property'
}
);

module.exports = Property;