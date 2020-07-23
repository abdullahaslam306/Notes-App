const fs=require('fs');

var book={
    name:"Introduction to C++",
    Aurthor:"ABC"
}
const stringJson=JSON.stringify(book);

console.log(stringJson);
// fs.writeFileSync("1-json.json",stringJson);
const buffer=fs.readFileSync("1-json.json");
const bufferString=buffer.toString();
const data=JSON.parse(bufferString);
console.log(data.name);
