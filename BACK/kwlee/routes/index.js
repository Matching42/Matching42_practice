const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("server start");
});

router.get("/kwlee", (req, res) => {
  res.send("matching42");
});

router.get("/hello", (req, res) => {
	res.render("../views/hello.html");
  });

module.exports = router;
