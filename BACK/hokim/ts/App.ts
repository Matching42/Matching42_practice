import * as express from "express";
import router from "./routes";
import middle from "./middleware";
//https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
const app: express.Application = express();
app.use(middle);
app.use('/',router);

export default app;