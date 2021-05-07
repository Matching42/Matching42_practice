import app from "./App";
import {createServer} from "http";

const server = createServer(app);

server.listen(3000, () => {
  console.log("server on");
});

export default server;