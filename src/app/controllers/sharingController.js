const path = require("path");
const getDir = require("../../config/js/readdirSync");
class sharingController {
  // [GET] /
  show = (req, res, next) => {
    var fileNew = getDir(
      "all",
      path.join(__dirname, "..", "..", "..", "public", "Documents"),
      2
    );
    var file = getDir(
      "all",
      path.join(__dirname, "..", "..", "..", "public", "Documents")
    );

    // console.log(arr);

    res.render("home", {
      title: "Home page",
      notify: req.query.notify,
      fileNew: fileNew,
      file: file,
      css: ["./css/main.css"],
    });
  };
}

module.exports = new sharingController();
