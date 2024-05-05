function clickevent(){
    document.getElementById('button').innerText='Clicked';
}

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }   
    add_address(add){
        this.add = add;
    }
        getdetail(){
            return (`THe name is ${this.name}`);
        }
    
}
let student1 = new Student('sauman','12');
student1.add_address('shah street')
console.log(student1.getdetail(),`The address is ${add_address}`);