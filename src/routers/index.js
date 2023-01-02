const express = require("express");
const router = express.Router();
const sharingController = require("../app/controllers/sharingController");
const uploadRouter = require("./upload");
const filesRouter = require("./files");
const searchRouter = require("./search");
const deleteRouter = require("./delete");
// const passport = require("../middleware/passport");
// const localStrategy = require("passport-local").Strategy;
// const passport = require("passport");
// const session = require("express-session");

//
//  LOGIN Component:
//  - Complete later..
//

// passport.use(
//   new localStrategy((username, password, done) => {
//     //các tên - name trường cần nhập, đủ tên trường thì Done
//     if (username == "user") {
//       //kiểm tra giá trị trường có name là username
//       if (password == 12345) {
//         // kiểm tra giá trị trường có name là password
//         // return done(null, username); //trả về username
//         return done(null, username); //trả về username
//       } else {
//         return done(null, false); // chứng thực lỗi
//       }
//     } else {
//       return done(null, false); //chứng thực lỗi
//     }
//   })
// );
// passport.serializeUser((username, done) => {
//   done(null, username);
// });
// passport.deserializeUser((name, done) => {
//   //tại đây hứng dữ liệu để đối chiếu
//   if (name == "user") {
//     //tìm xem có dữ liệu trong kho đối chiếu không
//     return done(null, name);
//   } else {
//     return done(null, false);
//   }
// });

// router.use(
//   session({
//     secret: "something",
//     cookie: {
//       maxAge: 1000 * 50 * 5, //đơn vị là milisecond
//     },
//   })
// );

// router.use(passport.session());

// router.get("/loginOK", (req, res) => res.send("Thành công"));
// router.get("/secret", (req, res) => {
//   if (req.isAuthenticated()) {
//     //trả về true nếu đã đăng nhập rồi
//     res.send("Đã đăng nhập");
//   } else {
//     res.send("Error");
//   }
// });

// router
//   .get("/login", (req, res) => {
//     res.render("login", {
//       title: "Login page",
//       css: ["../css/main.css"],
//     });
//   })
//   .post(
//     passport.authenticate("local", {
//       //chọn phương thức check là local => npm install passport-local
//       failureRedirect: "/login", //nếu check không đúng thì redirect về link này
//       successRedirect: "/loginOK",
//     })
//   );

//
//  END OF LOGIN Component:
//  - Complete later..
//


router.use("/upload", uploadRouter);
router.use("/files", filesRouter);
router.use("/search", searchRouter);
router.get("/about", sharingController.about);
router.get("/all", sharingController.showJson);
router.use("/delete", deleteRouter);
router.get("/", sharingController.show);

module.exports = router;
