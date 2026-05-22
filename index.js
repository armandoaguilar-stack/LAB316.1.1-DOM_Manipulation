//DOM Manipulation Part 1

// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)'; // var() https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'; // h1 from index.html

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr'); // flex-ctr from styles.css

//Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu'); //getElementById for id selector, top-menu 

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%'; // 100% height from styles.css

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

// Add a class of flex-around to topMenuEl.

// Progress Check - Here's what the page should look like so far:
