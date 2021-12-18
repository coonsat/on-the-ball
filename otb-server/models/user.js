const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {};
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A first name is required'
        },
        notEmpty: {
          msg: 'Please provide a first name'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A last name is required'
        },
        notEmpty: {
          msg: 'Please provide a last name'
        }
      }
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notNull: {
          msg: 'An email address is required.',
        },
        notEmpty: {
          msg: 'Please provide an email address.',
        },
        isEmail: {
          msg: 'Email address must be formatted correctly.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val) {
        const hashedPassword = bcrypt.hashSync(val, 10);
        this.setDataValue('password', hashedPassword);
      },
      validate: {
        notNull: {
          msg: 'A password is required.'
        },
        notEmpty: {
          msg: 'A password is required'
        }
      },
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};