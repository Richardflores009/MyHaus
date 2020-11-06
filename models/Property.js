const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Property extends Model {}

Property.init({
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    maintenance: {
        type: Sequelize.BOOLEAN,
        defaultValue: false

    },
    pet: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    freezeTableName: true,
    underscored: true,
    modelName: 'property'
}
);

module.exports = Property;