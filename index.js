// config/index.js

const mongoose = require("mongoose");
const dbConfig = require("./database.config");

const env = process.env.NODE_ENV || "development";
const { url, options } = dbConfig[env];

const connectDB = async () => {
  try {
    await mongoose.connect(url, options);
    console.log(`✅ Database connected (${env})`);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
