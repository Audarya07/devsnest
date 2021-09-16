## Connecting Postgres & Redis With Express  

### Project Setup  

* Create a directory for your project  
* > npm init  
* > npm i express pg redis  

-----------------------------------  

### Postgres Connection  

```
const { Client }    = require('pg');

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
```
---------------------------------------------------  

### Redis Connection  

```  
const redis = require('redis');  

// Redis connection  

const REDIS_PORT = process.env.PORT || 6379;  
const redisClient = redis.createClient();  
  
redisClient.on("connect", () => {  
    console.log("Redis connected successfully");  
});  
  
redisClient.setex('testdata', 5, 'audarya', redis.print)  
redisClient.get('testdata', redis.print)  
```  
-------------------------------  

Reference video to see speed difference using redis: [Link](https://www.youtube.com/watch?v=oaJq1mQ3dFI)  
