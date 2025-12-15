import url from "url";

const urlString = "https:/www.google.com/search?q=hello+world";

const urlObj = new URL(urlString);
console.log(urlObj);

//format()

const params = new URLSearchParams(urlObj.search);

params.append("limit", "5");
console.log(params.get("q"));
console.log(params);
console.log(url.format(urlObj));
