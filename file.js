const fs=require("fs")
fs.readFile("a.txt","utf-8", function(arr,data){
    console.log(data);
})

console.log("Hi there");
 let a=0;
for(let i=0;i<10000000;i++){
a++
}

console.log("Hi there 2");