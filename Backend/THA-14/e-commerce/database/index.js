const { Sequelize } = require("sequelize");
const {
    sequelize_database,
    sequelize_username,
    sequelize_password,
    sequelize_host,
    sequelize_dialect,
} = require("../config");

const sequelize = new Sequelize(
    sequelize_database,
    sequelize_username,
    sequelize_password,
    {
        host: sequelize_host,
        dialect: sequelize_dialect
    }
);

sequelize.sync({alter:true});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection established with DB");
    } catch (error) {
        console.error("Unable to connect with DB");
    }
})();

module.exports = sequelize;
