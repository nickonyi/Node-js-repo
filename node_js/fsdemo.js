//import fs from "fs";
import { log } from "console";
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

//reading using async wait
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(data);
  }
};

//writing to the file
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "This is a test file");
  } catch (error) {
    console.log(error);
  }
};

//appendfile
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is an appended message!");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
