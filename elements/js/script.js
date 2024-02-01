'use strict';

const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');

const OneHeart = document.querySelector('.heart');


box.style.cssText = 'background-color: blue;width: 500px';
btns[1].style.borderRadius = '100%';


// for(let i =0 ; i< hearts.length ; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor ='blue';
// });

const div = document.createElement('div');
// const text = document.createTextNode('Hello');

div.classList.add('black');

 document.body.append(div);
// hearts[2].before(div);
// circles[1].remove();

//circles[0].replaceWith(hearts[0]);

div.innerHTML="<h4>Hello world</h4>";
