import * as express from "express";

const router = express.Router();

router.get("/",
	(req, res) => {
	  res.send("server on");
	}
  );

  router.get("/42",
	(req, res) => {
	  res.send("we are born to code");
	}
  );

  export default router;