// File Sharing Application

const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");
const router = require(path.join(__dirname, "routers"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const db = require(path.join(__dirname, "config", "db"));

// Handlebars express template engine (And setup)
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// Connect to Database Server (Use MongoDB by Mongoose)
db.connect();

// Use static files (html, css, js, etc)
app.use(express.static("public"));

/*
  ¯\_(❛0 ‿❛0)_/¯

  #27.12.2022 : Done handling to upload files (middleware)
  [NEXT] : Upload multiple files
  [NEXT] : Load files from server to the user browser.
  [NEXT] : Build UI/UX
*/

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
