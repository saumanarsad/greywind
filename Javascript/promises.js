// To solve the problem of callback hell 
// Pending state, fulfilled state, rejected state
// function getData(dataID,func){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data Id", dataID);
//             resolve('Success');
//             if(func){
//                 func();
//             }
//         },2000);
//     })
// }
// let finalVal = getData(123);
// console.log(getData);
const getPromise=()=>{
   return  new Promise((resolve,reject)=>{
        console.log('i am a promise');
        // resolve(123);
        reject(123);
    })
} 
let promise = getPromise(res);
promise.then(()=>{
    console.log('hello',res);
})
promise.catch((err)=>{
    console.log('oh no',err);
})

// Promise can be handled if they are success or fail : 
//If they are fullfilled ; promise.then
// if they are rejected : promise.catch

