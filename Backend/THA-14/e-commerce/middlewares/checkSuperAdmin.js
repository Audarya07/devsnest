const check = (req, res, next) => {
    console.log("Incheck SESION =", req.session);
    if(req.session.User.role === "Super-admin") {
        res.status(200).send("Success");
    } else {
        res.status(401).send("Needs to be Super Admin");
    }
};

module.exports = check;
