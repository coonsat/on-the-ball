const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {};
  Bookings.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    startDateTime: {
      type: DataTypes.DATE,
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
      type: DataTypes.DATE,
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