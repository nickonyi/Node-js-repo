//import fs from "fs";
import fs from "fs/promises";

//read with a callback
//fs.readFile("./test.txt", "utf-8", (err, data) => {
//if (err) throw err;
//console.log(data);
//});

//readFileSync SYNC() version
//const data = fs.readFileSync("./test.txt", "utf8");
//console.log(data);

//promises .then
//fs.readFile("./test.txt", "utf8")
//.then((data) => {
//console.log(data);
// })
// .catch((err) => {
// console.log(err);
//});

//read file async await()
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//writefike

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "I am writing to this file");
  } catch (error) {
    console.log(error);
  }
};

//appendfile
const appendfile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nI am appending this file");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendfile();
readFile();
