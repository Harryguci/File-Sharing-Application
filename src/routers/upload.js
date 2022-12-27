const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.js");

// [POST] /upload/:kindFile
// Single file
router.post("/", upload.single("file_upload"), (req, res, next) => {
  try {
    // res.json({ Status: "File Uploaded" });
    var backURL = req.header("Referer") || "/";
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
  res.json({ Status: "Get method" });
});

module.exports = router;
