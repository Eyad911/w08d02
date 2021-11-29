const userModel = require("./../../db/models/user")
const bcrypt = require('bcrypt')
const SALT = Number(process.env.SALT);

const  Register   = async (req, res) => {
    const {email,password,role} = req.body;
    const lowerEmail = email.toLowerCase();
    const hashPass = await bcrypt.hash(password,SALT);
 const newUser = new userModel({
    email:lowerEmail,
    password:hashPass,
    role
 });
 newUser.save().then((result) => {
    res.status(201).json(result);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}

module.exports = {
    Register
   
  };