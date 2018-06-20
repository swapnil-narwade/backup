setTimeout(()=>{console.log("inside the setTimeout 1")},1000);
console.log("staring the app");
for (i=0; i<10000; i++){
    console.log(`inside the loop ${i}`);
}
setTimeout(()=>{console.log("inside the setTimeout 2")},10);