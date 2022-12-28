const path = require("path");
const getDir = require("../../config/js/readdirSync");

function sortFileArray(file) {
  for (var i = 0; i < file.length; i++) {
    for (var j = i + 1; j < file.length; j++) {
      if (parseInt(file[i].name) < parseInt(file[j].name)) {
        var temp = file[i];
        file[i] = file[j];
        file[j] = temp;
      }
    }
  }
  return file;
}
class sharingController {
  // [GET] /
  show = (req, res, next) => {
    var file = getDir(
      "all",
      path.join(__dirname, "..", "..", "..", "public", "Documents")
    );

    // console.log(arr);
    file = sortFileArray(file);
    var fileNew = [file[0], file[1]];

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
