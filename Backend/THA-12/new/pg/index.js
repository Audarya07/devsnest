const express = require("express");
const User = require("./model");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Pg");
});

const createUser = async (req, res) => {
    const newUser = new User({fullName:"Wilson", email:"audi2@mail.com", password: "Audi@Audi"});
    const savedUser = await newUser.save();
    console.log("USER SAVED NOWWWWWWW");
    res.status(201).json(savedUser);
}

app.get("/create", createUser);

app.listen(3000, (err) => {
    console.log("Connection established on PORT 3000!!");
});
