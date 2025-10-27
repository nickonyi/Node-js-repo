const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const celciousToFahrenheit = (cel) => {
  return (cel * 9) / 5 + 32;
};
module.exports = { generateRandomNumber, celciousToFahrenheit };

import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {
  //get current path
  const __fileName = url.fileURLToPath(import.meta.url);
  const __dirName = path.dirname(__fileName);

  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirName, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirName, "public", "about.html");
      } else {
        throw new Error("Not found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("server error!");
  }
});

server.listen(PORT, () => {
  console.log(`listening at port:${PORT}`);
});
