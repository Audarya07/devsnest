const express = require("express");
const { redisClient,
    RedisStore,
    session } = require("./redis");

const app = express();


app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'secret$%123',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1 * 360000
    }
}))

app.get("/", (req, res) => {
    res.send("Hello Redis");
});

app.get('/set', function(req, res, next) {
    const sess = req.session;
    sess.username = 'Audi';
    res.status(200).send(sess.username);
  });
  
app.get('/get', function(req, res, next) {
    console.log('Redis value', req.session.username);
    res.send(req.session.username);
});

app.listen(3000, (err) => {
    console.log("Connection established on PORT 3000!!");
});