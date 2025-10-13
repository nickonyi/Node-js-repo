import url from "url";

const urlString = "http://www.google.com?q=hello+world";

//url object
const urlObj = new URL(urlString);

//format
console.log(url.format(urlObj));
console.log(import.meta.url);

//file url to path
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);
console.log(params.get("q"));
params.append("limit", "5");
console.log(params);
