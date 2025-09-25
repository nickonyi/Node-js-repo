import { createServer } from "http";

const PORT = process.env.port;

const server = createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
