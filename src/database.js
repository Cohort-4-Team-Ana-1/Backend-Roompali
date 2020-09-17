const mongoose = require("mongoose");

const { config } = require("./config");

const mongoURL = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

const connection = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connection };
