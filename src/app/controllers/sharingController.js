class sharingController {
  // [GET] /
  show = (req, res, next) => {
    res.render("home", {
      title: "Home page",
    });
  };
}

module.exports = new sharingController();
