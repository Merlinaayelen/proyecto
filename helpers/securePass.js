const bcrypt = require("bcrypt");
const saltRnd = 10;

const encrypt = async (pass) => {
    return await bcrypt.hash(pass, saltRnd) 
}

const decrypt = async (pass, hashedPass) => {
    return await bcrypt.compare(pass, hashedPass) //Retorna True o False
}

module.exports = { encrypt, decrypt }