import { createServer } from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.port;

const server = createServer(async (req, res) => {
  //get the current paths
  const __fileName = url.fileURLToPath(import.meta.url);
  const __dirName = path.dirname(__fileName);
  console.log(__fileName);
  console.log(__dirName);

  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirName, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirName, "public", "about.html");
      } else {
        throw new Error("Not found!");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method ndot allowed!");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
