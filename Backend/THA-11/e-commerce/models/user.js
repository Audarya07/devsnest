const { DataTypes } = require('sequelize');
const sequelize = require("../database");

const User = sequelize.define("UserData", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    tableName:"UserData"
});

module.exports = User;
