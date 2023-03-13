const  db = require("../api/connection/db.connection");
const { DataTypes } = require("sequelize"); 
 
module.exports = db.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNullL: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNullL: true,
    },
    privileged: {
      type: DataTypes.BOOLEAN,
      allowNullL: true,
    },
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);
