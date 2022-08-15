const express = require("express");
const cors = require("cors");
require("./model");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./route")(app);

app.listen(4000);
console.log("Server is runnnig on port 4000");
