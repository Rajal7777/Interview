EVENT DELEGATION
event delegation is the technique in javascript where an event listner is attach to a parant element rather than all child element.
when a event occur in the child element it bubble up to the dom tree and the parent event listner handle the event based on the target elemet.

exmaple:
// HTML:
// <ul id="item-list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

const itemList = document.getElementById('item-list');

itemList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`Clicked on ${event.target.textContent}`);
  }
});


this
how and where the function is called determines what this points to .
1)new(Constructor call)
when fun is invoked with the new keyword,js creates a brand new obj instance and binds this to that instance.

function Person(name) {
  this.name = name;
}

const user = new Person('Alice');
console.log(user.name); // "Alice"

3. Implicit Binding (Method Calls)
When a function is called as a method of an object (e.g., obj.method()), this points to the object preceding the dot ..
const user = {
  name: 'Charlie',
  showName() {
    console.log(this.name);
  }
};

user.showName(); // "Charlie"


//it depend on what is calling it the left side value of the dot
const detachedShowName = user.showName;
detachedShowName(); // undefined (or logs Global/Window in non-strict mode)

here detachedShowName is a global 
Summary Checklist for Interviews
Was new used? If yes, this is the newly created object.

Were call, apply, or bind used? If yes, this is the explicitly passed object.

Was the function called as an object method (obj.func())? If yes, this is obj.

Is it a standalone call? this is undefined (strict mode) or global object.

Is it an arrow function? this is inherited from the outer execution scope.