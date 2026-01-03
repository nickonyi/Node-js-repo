import express from "express";
const app = express();
import url from "url";
import path from "node:path";
import { userRouter } from "./routes/userRouter.js";

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

app.set("views", path.join(__dirName, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`server Inakimbia  kwenye porti ${PORT}`);
});
