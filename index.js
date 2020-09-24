import fs from "fs";
import generateWordLists from "./generateWordLists";

(() => {
  const data = fs.readFileSync(__dirname + "/5000-words.txt", "utf-8");
  const words = generateWordLists(data);
  fs.writeFileSync(__dirname + "/words.txt", words.join("\n"));
})();
