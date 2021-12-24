const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {};
  Contract.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A name is required for the contract'
          }
        }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Text for the contract content is required'
        },
        notEmpty: {
          msg: 'Text for the contract content is required'
        }
      }
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A contract needs a start date'
        },
        notEmpty: {
          msg: 'A contract needs a start date'
        }
      }
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A contract needs an end date'
        },
        notEmpty: {
          msg: 'A contract needs an end date'
        }
      }
    },
    totalSessions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
          notNull: {
              msg: 'The number of sessions needs to be defined'
          }
      }
    }
  },
  {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};