//import fs from "fs";
import fs from "fs/promises";
//readfile using callback
//fs.readFile("./test.txt", "utf-8", (error, data) => {
//if (error) throw error;
//console.log(data);
//});

//reading using the filesync the synchronous version
//const data = fs.readFileSync("./test.txt", "utf8");
//console.log(data);

//reading uisng the async() .then() callback

fs.readFile("./test.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
