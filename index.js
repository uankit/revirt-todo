const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const { db } = require("./config/db");
const apiRoutes = require("./routes");
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
  db();
  console.log("Server is up and running");
});
