const express = require("express");
const router = express.Router();
const middle = require("../middleware");

router.get("/", (req, res) => {
  res.send("<h1>Hello hyeokim's Express</h1>");
});

router.get('/time', middle, (req, res) => {
  res.send("<h1>Time home page</h1><p>Refresh and Check the console!</p>");
});

module.exports = router;