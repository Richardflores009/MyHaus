const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
<<<<<<< HEAD
      body: {
        type: DataTypes.STRING,
        allowNull: false
      },
=======
>>>>>>> 5560d917371baea5fe52d4820a5c367ad11c3f60
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
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;