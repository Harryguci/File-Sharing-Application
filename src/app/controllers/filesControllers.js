const path = require("path");
const File = require("../models/File");

const kindFile = ["code", "de-cuong", "slide", "study", "tieu-luan", "other"];
const kindFileTEMP = [
  "code",
  "Đề cương",
  "Slide bài giảng",
  "Học tập",
  "Tiểu luận",
  "Khác",
];

const http = require("http");

class filesController {
  // [GET] /files
  show = (req, res, next) => {
    http.get("http://localhost:3000/files/api/all", response => {
      const { statusCode } = response;
      const contentType = response.headers['content-type'];

      console.log("Status Code: " + statusCode);
      console.log("Content Type: " + contentType);

      if (statusCode != 200) {
        res.send({
          error: "Invalid"
        });
      }

      response.setEncoding('utf8');
      let rawData = '';

      response.on('data', (chunk) => { rawData += chunk; });

      response.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log('[parsedData]', parsedData);
          res.send(parsedData);
        } catch (e) {
          res.send({ error: e });
        }
      });
    }).on('error', (error) => {
      res.send({ error });
    });

    // File.find({ delete: "false" })
    //   .then((arr) => {
    //     arr = Array.from(arr);
    //     arr = arr.map((obj) => (obj = obj.toObject()));
    //     arr = arr.reverse();

    //     res.render("files", {
    //       css: [
    //         path.join("..", "css", "main.css"),
    //         path.join("..", "css", "files.css")
    //       ],
    //       title: "File page",
    //       page: "All",
    //       notify: req.query.notify,
    //       file: arr,
    //     });
    //   })
    //   .catch((err) => next(err));
  };

  // [GET] /files/api/all
  showAll = async (req, res, next) => {
    console.log("SHOW ALL")
    var array = await File.find({ delete: "false" })
      .then((arr) => {
        arr = Array
          .from(arr)
          .map(
            (obj) => (obj = obj.toObject())
          );
        arr = arr.reverse();
        return arr;
      })
      .catch((err) => next(err));
    res.send(array);
  }

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
            css: [
              path.join("..", "css", "main.css"),
              path.join("..", "css", "files.css")
            ],
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
    var notify;

    await File.findOneAndUpdate({ id: file.name }, { delete: true })
      .then((obj) => {
        notify = `Deleted successfully file ${obj.name}`;
        res.redirect(`/files?notify=${notify}`);
      })
      .catch((err) => next(err));
  };
}

module.exports = new filesController();
