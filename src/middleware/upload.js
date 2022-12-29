const multer = require("multer");
const path = require("path");

var kindFile = ["code", "de-cuong", "slide", "study", "tieu-luan"];

// Middleware
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //console.log(req.body);
    var type = req.body.type;
    type = type.toLowerCase();
    var check = false;
    kindFile.map((value) => {
      if (value === type) {
        check = true;
      }
    }).length;

    var Path = path.join(__dirname, "..", "..", "public", "Documents", "other");
    req.filePath = path.join("Documents", "other");
    if (check) {
      Path = path.join(__dirname, "..", "..", "public", "Documents", type);
      req.filePath = path.join("Documents", type);
    }
    // Callback to store the uploaded file
    callback(null, Path);
  },

  filename: (req, file, callback) => {
    var fileID = Date.now() + path.extname(file.originalname);
    req.id = fileID;
    callback(null, fileID);
  },
});

// exports.fileID = fileID;
// exports.multer = multer({ storage });
// module.exports = [multer({ storage }), (fileID = fileID)];

module.exports = {
  multer: multer({ storage }),
};
