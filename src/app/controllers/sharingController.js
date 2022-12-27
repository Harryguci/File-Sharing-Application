const path = require("path");
const getDir = require("../../config/js/readdirSync");
class sharingController {
  // [GET] /
  show = (req, res, next) => {
    // console.log(req.query.notify);
    var arr = getDir(
      "other",
      path.join(__dirname, "..", "..", "..", "public", "Documents")
    );

    var buff = [];
    arr = arr.map(function (obj) {
      var temp = obj;
      buff.push({ name: temp, type: "other" });
    });
    arr = buff;

    res.render("home", {
      title: "Home page",
      notify: req.query.notify,
      file: arr,
    });
  };
}

module.exports = new sharingController();
