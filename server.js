import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write("hellow world!");
  res.end();
});
