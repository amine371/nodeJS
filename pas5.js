const numbers = process.argv.slice(2,process.argv.length);
let result = numbers.reduce((x,y) => Number(x) + Number(y), 0)
console.log(result);