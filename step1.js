const number=process.argv.slice(2,process.argv.length);
let sum =number.reduce((a,b)=>a+number(b),0);
console.log(sum);