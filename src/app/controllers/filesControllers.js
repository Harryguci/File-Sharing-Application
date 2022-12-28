const path = require("path");
const getDir = require("../../config/js/readdirSync");
const deleteFile = require("../../config/js/deleteFile");
const fs = require("fs");

var kindFile = ["code", "de-cuong", "slide", "study", "tieu-luan", "other"];
var kindFileTEMP = [
  "code",
  "Đề cương",
  "Slide bài giảng",
  "Học tập",
  "Tiểu luận",
  "Khác",
];

class filesController {
  // [GET] /files
  show = (req, res, next) => {
    var arr = getDir(
      "all",
      path.join(__dirname, "..", "..", "..", "public", "Documents")
    );

    res.render("files", {
      css: ["../css/main.css", "../css/files.css"],
      title: "File page",
      page: "All",
      notify: req.query.notify,
      file: arr,
    });
  };

  // [GET] files/:slug
  showDetail = (req, res, next) => {
    try {
      var type = req.params.slug;
      var arr = getDir(
        type,
        path.join(__dirname, "..", "..", "..", "public", "Documents")
      );

      console.log(arr);
      for (var i = 0; i < kindFile.length; i++) {
        if (type === kindFile[i]) {
          type = kindFileTEMP[i];
          break;
        }
      }
      res.render("files", {
        css: ["../css/main.css", "../css/files.css"],
        title: `File ${type}`,
        page: `${type}`,
        notify: req.query.notify,
        file: arr,
      });
    } catch (err) {
      next(err);
    }
  };

  // [POST] /files/delete/
  delete = async (req, res, next) => {
    var file = req.body;
    var pathToFile = path.join(
      __dirname,
      "..",
      "..",
      "..",
      `public/Documents/${file.type}/${file.name}`
    );

    if (await fs.existsSync(pathToFile)) {
      await fs.unlinkSync(pathToFile);
    }
    var notify = "Successfully Deleted";
    res.redirect(`/files?notify=${notify}`);
  };
}

module.exports = new filesController();
