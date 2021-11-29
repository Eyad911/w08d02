const mongoose = require('mongoose')
require('dotenv').config()

const DB_URI= process.env.DB_URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB_URI, options).then(() => {
  console.log("DB READY TO USE");
});