//Implement a Debounce Function

function debounce(func, delay){
    let timerId;

    return function (...args){  //spread parameter passed down like fun, dleay, mouseclick,keystroke
        //closure it can access, change the outer scope variable of parent timerId
        //clear any timer if running and reset the running timer
        clearTimeout(timerId);

        //set the timer
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }

}

//MEmo
//func.apply(this, args)    this line mean execute the function right now and unpack the ...args eg:- args is ["Ninja", 12, "Sword"] and remember who own the function
//...args = Packs all separate inputs into one neat box.
// .apply() = Unpacks that box and runs the function.
//this = Makes sure the correct object/character performs the action

/*
1. Arrow Functions Do Not Have Their Own thisIn JavaScript, arrow functions inherit this lexically from their surrounding parent scope.The arrow function is written inside return function (...args) { ... }.Therefore, this inside the setTimeout arrow function is exactly identical to whatever this is inside that wrapper function.

2. What this Points to at RuntimeThe value of this inside the wrapper function depends entirely on how the debounced function is eventually called.

Scenario A: Called as an Object Method (Most Common)If you attach the debounced function to a button or an object method, this points to that object or HTML element.

const button = document.querySelector('button');

button.addEventListener('click', debounce(function() {
  console.log(this); // Points directly to the <button> element!
}, 300));

//CASE ARROW FUNCTION HAS NOT THEIR OWN THIS SO INHERITS LEXICALLY FROM THEIE SURROUNDING PARENT SCOPE
//In this case parent this is the global window object
const processInput = debounce(function() {
  console.log(this); // Points to the Window object (or undefined in strict mode)
}, 300);

processInput(); 
this refers to the object that is currently executing or owning the code

*/
