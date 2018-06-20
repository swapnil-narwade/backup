let asyncAdd= (a, b)=>{
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          if (typeof a==='number' && typeof b==='number'){
              resolve(a+b);
          } else {
              reject("it has been rejected");
          }
      },1500)
  });
};


asyncAdd(8, 9)  .then((res)=>{
   console.log("result",res);
   return asyncAdd(res,'swa')
}).then((res)=>{
    console.log("result",res);
}).catch((errorMessage)=>{
   console.log(errorMessage);
});








// let promise = new Promise((resolve, reject)=>{
//    if (1===1){
//        resolve("this is resolved");
//    } else {
//        reject("this is rejected");
//    }
// });
//
// promise.then((message)=>{
//     console.log(message)
// },(error)=>{ console.log(error)}
// );