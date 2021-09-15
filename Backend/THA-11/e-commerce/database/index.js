const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "devs_db",
    "postgres",
    "postgres",
    {
        host: "localhost",
        dialect: "postgres"
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
