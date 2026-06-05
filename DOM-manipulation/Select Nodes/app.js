// DOM Manipulation 




// // GetElementByID()

// const title = document.getElementById('main-heading');

// console.log(title);


// // // GetElementByClassName()

// const listItems =
//   document.getElementsByClassName('list-items')
  
//   console.log(listItems);


// // GetElementByTagName()

// const tagNames = document.getElementsByTagName('li');

// console.log(tagNames);


// // querySelector()

// const container = document.querySelector('div');

// console.log(container);


// // querySelectorAll()

// const allDivs = document.querySelectorAll('div');

// console.log(all);


// Style property DOM manipulation

// const colour = document.querySelector('#sub-heading');

// colour.style.color = 'red';

// console.log(colour);


// Styling Elements

// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '5rem';
// }

// console.log(listItems);


// Creating Elements 

const ul = document.querySelector('ul');
const li = document.createElement('li');


// Adding elements

ul.append(li)

// Modifying the text

li.innerText = "X-Men";


// Modifying attributes and classes 

li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

const title = document.querySelector('#main-heading');


console.log(title.getAttribute('id'));









