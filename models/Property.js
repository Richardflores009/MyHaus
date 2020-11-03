const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Property extends Model {}

Property.init({
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    landlord: DataTypes.STRING
}, {
    sequelize
});

module.exports = Property;