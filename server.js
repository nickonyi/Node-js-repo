import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-type", "text/html");
  //res.statusCode = 404;

  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>Hellow World!!</h1>");
});

server.listen(PORT, () => {
  console.log(`listening at port:${PORT}`);
});
