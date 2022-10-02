function myFunc(name){
    console.log("function 1st");
    console.log(`name ${name}`)
}

function myFunc2(callback){
console.log("myFunc2");
callback("ali");
}

myFunc2(myFunc);