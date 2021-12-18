const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {};
  Bookings.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    startDateTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A start date and time is required'
        },
        notEmpty: {
          msg: 'A start date and time is required'
        }
      }
    },
    endDateTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'An end date and time is required'
        },
        notEmpty: {
          msg: 'An end date and time is required'
        }
      }
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The email address you entered already exists.',
      },
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
    sessionType: {
        type: DataTypes.ENUM,
        values: ['single', 'group']
    } 
  },
  {
    sequelize,
    modelName: 'Booking',
  });
  return Bookings;
};