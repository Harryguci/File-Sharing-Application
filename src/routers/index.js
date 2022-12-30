const express = require("express");
const router = express.Router();
const sharingController = require("../app/controllers/sharingController");
const uploadRouter = require("./upload");
const filesRouter = require("./files");
const searchRouter = require("./search");

router.use("/upload", uploadRouter);
router.use("/files", filesRouter);
router.use("/search", searchRouter);
router.get("/about", sharingController.about);
router.get("/all", sharingController.showJson);
router.get("/", sharingController.show);

module.exports = router;
