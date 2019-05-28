'use strict';

// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const button = document.querySelector('button');

let result = 0;
for (let i = 0; i < document.querySelectorAll('li').length; i++) {
    result++
};
button.addEventListener('click', () => {
    document.querySelector('p').innerHTML = result;
});
