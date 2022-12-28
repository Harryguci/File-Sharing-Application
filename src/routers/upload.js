const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.js");

// [POST] /upload/:kindFile
// Single file

function cleanQuery(path) {
  var i;
  for (i = path.length - 1; i >= 0; i--) {
    if (path[i] === "?") {
      break;
    }
  }

  return path.substring(0, i - 1);
}

router.post("/", upload.single("file_upload"), (req, res, next) => {
  try {
    // res.json({ Status: "File Uploaded" });
    var backURL = "/files";
    backURL = cleanQuery(backURL);
    backURL += "?notify=Upload file successfully!";
    res.redirect(backURL); // After redirect, Send a notification for user.
  } catch (err) {
    next(err);
  }
});

// [POST] /upload/multiple
// Multiple file

// [GET] /upload
router.get("/", (req, res, next) => {
  var notify = req.query.notify;
  res.redirect("/" + `?notify=${notify}`);
});

module.exports = router;
