console.log('hello from js');

/*

Event delegation is a technique in JavaScript where you place a single event listener on a parent element to manage events for all of its child elements, current or future.

Instead of adding event listeners to multiple individual child elements, you take advantage of event propagation (specifically, event bubbling).


Why Use Event Delegation?
Better Performance & Memory Savings: Creating fewer event listeners uses less memory and speeds up page load, especially for long lists or complex DOM trees.

Handles Dynamic Content: If you dynamically add new <li> elements to the list using JavaScript later, they will automatically work with the existing parent listener without needing new event listeners attached.

Cleaner Code: Fewer listeners mean less setup and teardown logic when DOM elements are removed or updated.
*/

/*
Delegating non-bubbling events
that focus, blur, scroll, mouseenter, mouseleave, and resize do not bubble, so the obvious delegation pattern (one listener on the parent) does not work for them. Two solid workarounds:
*/



const form = document.getElementById('user-form');
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(`${name}: ${value}`);
});

const ulElement = document.getElementById('parent-list');
ulElement.addEventListener('click', (event) => {
    //if (event.target.tagName === 'LI')
    // if(event.target && event.target.matches('li'))
        if (event.target.tagName === 'LI') {
        console.log(`You clicked on ${event.target.textContent}`);
    }
})



//delegation not bubbling events

document.body.innerHTML = `
  <form id="form">
    <input id="a" placeholder="A">
    <input id="b" placeholder="B">
  </form>
`;

const form1 = document.getElementById('form');
form1.addEventListener('focusin', (event) =>
  console.log('focusin:', event.target.id),
);
form1.addEventListener('focusout', (event) =>
  console.log('focusout:', event.target.id),
);