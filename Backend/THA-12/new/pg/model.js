const sequelize = require("./postgres");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
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
    tableName:"user"
});

module.exports = User;
