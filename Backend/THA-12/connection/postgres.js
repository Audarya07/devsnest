const { Client } = require('pg');

// Postgres connection
const pgClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'devs_db',
    password: 'postgres',
    port: 5432,
});

pgClient.connect();

pgClient.on("connect", () => {
    console.log("Postgres connected successfully");
});    

pgClient.on("end", () => {
    console.log("Postgres Connection end");
});

pgClient.query(`SELECT * FROM dummy;`, [], (err, res) => {
    if(!err){
        console.log("My Response", res.rows);
    }    
    pgClient.end();
});    
