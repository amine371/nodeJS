const fs= require('fs');
const file=process.argv[2]
const data=fs.readFile(file);
const temp=data.toString().split('\n');
console.log (temp.length-1);