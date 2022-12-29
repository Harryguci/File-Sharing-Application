const express = require("express");
const router = express.Router();
const sharingController = require("../app/controllers/sharingController");
const uploadRouter = require("./upload");
const filesRouter = require("./files");

router.use("/upload", uploadRouter);
router.use("/files", filesRouter);

router.get("/all", sharingController.showJson);
router.get("/", sharingController.show);

module.exports = router;
