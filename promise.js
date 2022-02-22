let p=new Promise((resolve,reject) => {
    var a=4;
    if(a==4)
        resolve("Succeed");
    else
        reject("fail");
    
});

p.then((mesage)=>{
    console.log(mesage);
}).catch((mesage)=>{
    console.log(mesage);
});