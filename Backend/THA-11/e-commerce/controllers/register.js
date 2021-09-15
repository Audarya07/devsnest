const User = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const alreadyExists = await User.findOne({where: { email }});
        if(alreadyExists){
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({email: email.toLowerCase(), password: hash, fullName: "Audi"});
        const saveduser = await newUser.save();
        res.status(201).send(saveduser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong!!");
    }
}

module.exports = register;
