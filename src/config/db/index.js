// Connect to the server.

const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/file-sharing-app");
    console.log("Connection Successfully");
  } catch (err) {
    console.log("Connection Error");
  }
}

module.exports = { connect };
