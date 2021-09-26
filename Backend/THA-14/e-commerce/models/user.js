const { DataTypes } = require('sequelize');
const sequelize = require("../database");

const User = sequelize.define("UserData", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        
    },
    role: {
        type:DataTypes.STRING,
        defaultValue: 'user',
        values: ["user", "admin", "superadmin"]
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    tableName:"UserData",
    sequelize
});

module.exports = User;
