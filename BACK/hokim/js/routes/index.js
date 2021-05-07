const express = require("express");
const router = express.Router();
const middle = require("../middleware");

router.get("/", middle, (req, res) => {
  res.send("server on");
});

router.get("/42", middle, (req, res) => {
  res.send("we are born to code");
});

module.exports = router;
