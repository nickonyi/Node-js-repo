import url from "url";
import path from "path";

const fileName = "./dir1/dir2/test.txt";

//basename
console.log(path.basename(fileName));

//dirname
console.log(path.dirname(fileName));

//extension name
console.log(path.extname(fileName));

//parse
console.log(path.parse(fileName));

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const filePath2 = path.join(__dirName, "dir1", "dir2", "test.txt");
console.log(filePath2);
