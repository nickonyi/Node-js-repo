import crypto from "crypto";

//create hash
//const hash = crypto.createHash("md5");
//hash.update("password123");
//console.log(hash.digest("hex"));
//
////random bytes
//crypto.randomBytes(32, (err, buff) => {
//  if (err) throw err;
//  console.log(buff.toString("hex"));
//});

//createcipheriv and createdecipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(
  "Hello, this is a secret message",
  "utf-8",
  "hex"
);
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
