//closure
//magine you have a magic backpack.Inside this backpack, you put a notebook with a secret password written on it.Even if you walk away from your bedroom and go to a completely different school, whenever you open that specific backpack, you can still read your secret password.In JavaScript, a closure is exactly like that magic backpack. It allows a function to remember and access variables from its original home, even after that home has closed down

function bagPack(){
    let secret = "this is a scret text";

    return  function(){  //this function has the acess to the outer scopes
        console.log(secret)
    }


}
bagPack()();//this is a scret text

const doraimonBag = bagPack();
doraimonBag() //this is a scret text

console.log(doraimonBag) //[Function (anonymous)] // this is a function ready to be called 




//EXPLANTAION
// CLOSURES bagPack function {A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.}