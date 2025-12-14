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

  console.log(users);
  next();
};

//JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//router handler for api/users
const getUsersRouteHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//route handler for getting user by id
const getUserByIdRouteHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "user not found" }));
    res.end();
  }
};

//handler for creating users
const createUserHandler = (req, res) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    const newUser = JSON.parse(data);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

//user not found route handler
const userNotFoundRouteHnadler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "route not found" }));
  res.end();
};

const server = http.createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersRouteHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/g) &&
        req.method === "GET"
      ) {
        getUserByIdRouteHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        userNotFoundRouteHnadler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
