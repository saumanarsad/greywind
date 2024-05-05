
function api(data1){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("hello",data1);
            res('resolved');
        },4000)
    })
}
async function myfunc(){
    await api('data one');
    await api('get data 2');
}
myfunc();