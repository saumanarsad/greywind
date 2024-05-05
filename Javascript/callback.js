// console.log('one');
// console.log('2');
// setTimeout(() => {
//     console.log('hello');
// }, 1000);
// console.log('3');
// console.log('4');

function calculate(a,b,func){
    func(a,b);
}
calculate(1,2,(a,b)=>{
    console.log(a+b);
});

//callback hell
function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log('dataId', dataID);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1,()=>{
    getData(2);
});