// config/database.config.js

module.exports = {
  development: {
    url: process.env.MONGO_URI || "mongodb://localhost:27017/dev_db",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  test: {
    url: process.env.MONGO_URI_TEST || "mongodb://localhost:27017/test_db",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  production: {
    url: process.env.MONGO_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
