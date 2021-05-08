const express = require("express");

class App {
  constructor() {
    this.app = express();
    this.app.set('view engine', 'ejs');
    this.app.engine('html', require('ejs').renderFile);
    this.app.use(require("./routes"));
  }
}

module.exports = new App().app;
