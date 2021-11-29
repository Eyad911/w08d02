const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER RUN ON ${PORT}`);
});
