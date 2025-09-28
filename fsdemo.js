//import fs from "fs";
import fs from "fs/promises";

//readfile call back
//fs.readFile("./test.txt", "utf8", (err, data) => {
//if (err) throw err;
//console.log(data);
//});

//readFileSync() - synchronous version
//const data = fs.readFileSync("./test.txt", "utf8");
//console.log(data);

//readFile - promise .then() version
fs.readFile("./test.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//readFile async
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//write file
const writeFile = async () => {
  try {
    await fs.writeFile(
      "./test.txt",
      "I am writing to this file from the console!!"
    );
    console.log("file written to...");
  } catch (error) {
    console.log(error);
  }
};

//appendfile
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis has been appended!");
    console.log("appended to...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
