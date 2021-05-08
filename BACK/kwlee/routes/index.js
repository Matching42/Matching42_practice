const express = require("express");
const router = express.Router();
const middle = require("../middleware");

router.get("/", (req, res) => {
  res.send("server start");
});

router.get("/kwlee", middle, (req, res) => {
  res.send("matching42");
});

router.get("/hello",middle, (req, res) => {
	res.render("../views/hello.html");
  });

module.exports = router;
