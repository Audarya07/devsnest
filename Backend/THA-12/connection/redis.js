const redis = require('redis');

// Redis connection
const REDIS_PORT = process.env.PORT || 6379;

const redisClient = redis.createClient();

redisClient.on("connect", () => {
    console.log("Redis connected successfully");
});

redisClient.setex('testdata', 5, 'audarya', redis.print)
redisClient.get('testdata', redis.print)

