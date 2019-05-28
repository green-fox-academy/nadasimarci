'use strict';

// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

let h1Element = document.getElementsByTagName('h1')[0];

window.addEventListener('keyup', function(event) {
  h1Element.textContent = `Last pressed key code is: ${event.keyCode}`;
});
