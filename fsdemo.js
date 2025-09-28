import fs from "fs";

fs.readFile("./test.txt", "utf8", (data, err) => {
  if (err) throw err;
  console.log(data);
});
