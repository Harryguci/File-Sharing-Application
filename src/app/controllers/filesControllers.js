const path = require("path");
const getDir = require("../../config/js/readdirSync");
const deleteFile = require("../../config/js/deleteFile");
const File = require("../models/File");

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
    // var arr = getDir(
    //   "all",
    //   path.join(__dirname, "..", "..", "..", "public", "Documents")
    // );

    File.find({ delete: "false" })
      .then((arr) => {
        arr = Array.from(arr);
        arr = arr.map((obj) => (obj = obj.toObject()));

        res.render("files", {
          css: ["../css/main.css", "../css/files.css"],
          title: "File page",
          page: "All",
          notify: req.query.notify,
          file: arr,
        });
      })
      .catch((err) => next(err));
  };

  // [GET] files/:slug
  showDetail = (req, res, next) => {
    try {
      var type = req.params.slug; // Kind of Documents
      File.find({ type: type, delete: "false" })
        .then((arr) => {
          arr = Array.from(arr);
          arr = arr.map((obj) => (obj = obj.toObject()));
          var heading;
          for (var i = 0; i < kindFile.length; i++) {
            if (type == kindFile[i]) {
              heading = kindFileTEMP[i];
              break;
            }
          }

          res.render("files", {
            css: ["../css/main.css", "../css/files.css"],
            title: "File page",
            page: heading,
            notify: req.query.notify,
            file: arr,
          });
        })
        .catch((err) => next(err));
    } catch (err) {
      next(err);
    }
  };
  // [POST] /files/delete/
  delete = async (req, res, next) => {
    var file = req.body;
    var pathToFile;

    await File.findOneAndDelete({ id: file.name })
      .then((obj) => {
        pathToFile = path.join(
          __dirname,
          "..",
          "..",
          "..",
          "public",
          obj.url,
          obj.id
        );
        console.log("Object: ", obj);
        console.log("Path : ", pathToFile);

        var notify;
        if (pathToFile && fs.existsSync(pathToFile)) {
          fs.unlinkSync(pathToFile);
          notify = "Successfully Deleted";
        } else notify = "Failed to Deleted";

        res.redirect(`/files?notify=${notify}`);
      })
      .catch((err) => next(err));
  };
}

module.exports = new filesController();
