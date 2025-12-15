import url from "url";
import path from "path";

const filePath = "./dir1/dir2/test.txt";

//basename
console.log(path.basename(filePath));

//dirname
console.log(path.dirname(filePath));
//extname()
console.log(path.extname(filePath));
//parse
console.log(path.parse(filePath));

const fileName = url.fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
//join()

const filepath = path.join(dirName, "dir1", "tesd.txt");
console.log(filepath);
