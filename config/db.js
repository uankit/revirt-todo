const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { db };
