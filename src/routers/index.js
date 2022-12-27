const express = require("express");
const router = express.Router();
const sharingController = require("../app/controllers/sharingController");
const uploadRouter = require("./upload");

router.use("/upload", uploadRouter);
router.get("/", sharingController.show);

module.exports = router;
