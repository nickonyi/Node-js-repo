import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello world</h1>");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server listening at port: ${PORT}`);
});
