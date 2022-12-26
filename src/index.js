const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const router = require(path.join(__dirname, "routers"));
const db  = require("./config/db");

db.connect();

// Use static files (html, css, js, etc)
app.use(express.static("public"));

/*
¯\_(❛̃ ‿❛̃)_/¯

It has bugs, but I don't know it where.
*/

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
