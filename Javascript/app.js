// //DOM is required to manipulate the html code within the javascript



// document.getElementById('my_button').innerText = 'hello from js';

// let elements = document.querySelector("#my_button"); //1st element only 
// console.log(elements.innerText);


// // let secondelements = document.querySelectorAll("p"); //all the elements returned 
// // console.dir(secondelements);

// let div = document.querySelector('div');
// div.style.backgroundColor = 'green';
// div.innerText = 'my text';

let newbutton = document.createElement('button');
newbutton.innerText = 'Click me pls';
mylist = document.querySelector('ul');
mylist.remove();
document.querySelector('div').after(newbutton);

