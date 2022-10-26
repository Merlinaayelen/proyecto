const segurePass = require("../helpers/securePass")
const User = require("../schemas/usersSchema")

function getLoginForm(req, res, next) {
    res.render("loginForm")
}

function sendLoginForm(req, res, next) {
    res.send(req.body)
};

function getRegisterForm(req, res, next) {
    res.render("registerForm")
}

//Crear nuevo usuario

async function sendRegisterForm(req, res, next) {
    const {name, lastName, email, pass} = req.body
    const password = await segurePass.encrypt(pass)
    
    const newUser = new User({
        name, lastName, email, password
    })
    newUser.save((err)=>{
        if(!err){ 
            res.render("secret")
        } else{
            console.log(err.message);
        }
    })

};

module.exports = { getLoginForm, sendLoginForm, getRegisterForm, sendRegisterForm }