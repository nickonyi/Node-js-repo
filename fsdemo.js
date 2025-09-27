import fs from "fs";

fs.readFile("./test.txt", "utf8", (err, data) => {
  console.log(data);
  if (err) throw err;
});
