const express = require("express");
const router = express.Router();
const sharingController = require("../app/controllers/sharingController");
const uploadRouter = require("./upload");
const filesRouter = require("./files");
const searchRouter = require("./search");
const deleteRouter = require("./delete");

router.use("/upload", uploadRouter);
router.use("/files", filesRouter);
router.use("/search", searchRouter);
router.get("/about", sharingController.about);
router.get("/all", sharingController.showJson);
router.use("/delete", deleteRouter);
router.get("/", sharingController.show);

module.exports = router;
