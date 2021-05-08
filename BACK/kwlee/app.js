const express = require("express");

class App {
  constructor() {
    this.app = express();
    this.app.use(require("./routes/index.js"));
  }
}

module.exports = new App().app;
