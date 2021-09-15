const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade"); 

const landing = (req, res) => {
    // res.sendFile(path.join(__dirname, "public/render.txt"));
    res.render('index', {title: "Express"});
}
app.get("/", landing);

const setCookie = (req, res) => {
    res
    .status(200)
    .cookie("first", "audi", { expire: new Date(Date.now() + (1 * 3600000))})
    .cookie("second", "again")
    .redirect(301, "/")
}

app.get("/cookie", setCookie);


app.listen(5000, () => {
    console.log("Connected to port 5000");
});
