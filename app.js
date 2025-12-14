import http from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John doe" },
  { id: 2, name: "Jane doe" },
  { id: 3, name: "Jenny doe" },
];
//logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
};
const server = http.createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      const id = req.url.split("/")[3];
      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(user));
        res.end();
      } else {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "user not found" }));
        res.end();
      }
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "route not found" }));
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
