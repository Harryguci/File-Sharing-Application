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
    if (check) {
      Path = path.join(__dirname, "..", "..", "public", "Documents", type);
    }

    // Callback to store the uploaded file
    callback(null, Path);
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

module.exports = multer({ storage });
