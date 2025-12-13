import http from "http";
import dotenv from "dotenv";
import path from "path";
import url from "url";
import fs from "fs/promises";
dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {
  const __fileName = url.fileURLToPath(import.meta.url);
  const __dirName = path.dirname(__fileName);

  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirName, "public", "index.html");
        console.log(filePath);
      } else if (req.url === "/about") {
        filePath = path.join(__dirName, "public", "about.html");
      } else {
        throw new Error("Page not found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server error");
  }
});

server.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
