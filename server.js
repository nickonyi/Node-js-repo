import http from "http";
import { json } from "stream/consumers";

const PORT = 8080;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-type", "text/html");
  //res.statusCode = 404;

  res.writeHead(500, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "server error" }));
});

server.listen(PORT, () => {
  console.log(`listening at port:${PORT}`);
});
