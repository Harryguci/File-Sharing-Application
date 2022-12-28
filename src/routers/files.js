const express = require("express");
const router = express.Router();
const filesController = require("../app/controllers/filesControllers");
// [GET] /files/
router.get("/:slug", filesController.showDetail);
router.post("/delete", filesController.delete);
router.get("/", filesController.show);

module.exports = router;
