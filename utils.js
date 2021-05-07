const helloFunc= require("./helloWorld");
console.log(helloFunc);

helloFunc.hello();
console.log(helloFunc.name);
//setInterval()

setInterval(()=>{
helloFunc.hello();
},1000);
setTimeout(()=>{
console.log(helloFunc.name);
},5000);