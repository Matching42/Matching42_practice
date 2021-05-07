function middleware(req, res, next) {
  console.log("you visited middle");
  next();
}

module.exports = middleware;
