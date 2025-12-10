const http = require("http");
const PORT = 3000;
const server = http.createServer();

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening at PORT:${PORT}`);
});
