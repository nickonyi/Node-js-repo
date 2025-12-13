import http from "http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  console.log(req);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello world</h1>");
});

server.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
