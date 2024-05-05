  function asyncfunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('hello some data');
            res('success');
        },2000);
    })
}
