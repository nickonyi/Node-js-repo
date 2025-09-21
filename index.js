const fs = require("fs/promises");

const example = async () => {
  const fileName = "./test.txt";
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log(data);
    const content = "some content";
    await fs.appendFile(fileName, content);
    console.log("wrote some content!");
    const newData = await fs.readFile(fileName, "utf-8");
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

example();
