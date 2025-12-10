const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  const { method, url, headers } = req;

  if (method === "GET" && url === "/cats") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const responseBody = {
      headers,
      method,
      url,
      body: ["Mrs. Meowsers", "Hairball", "Jerk"],
    };
    res.write(JSON.stringify(responseBody));
    res.end();
  }
});

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening at PORT:${PORT}`);
});
