const originalObj = {
  name: "Alish",
  address: {
    city: "Kathmandu",
    geo: { lat: 27.7172, lng: 85.324 },
  },
};

const copy = originalObj;
copy.name = "Ramu"
console.log(copy.name) //Ramu it will change the originalobj why because both copy and originalobj point the same object in the memory
/*
user ────────┐
             ↓
        ┌─────────────┐
        │ name        │
        │ address     │
        └─────────────┘
             ↑
copy ────────┘
*/

const shallowCopy = {...originalObj};
console.log(shallowCopy)
console.log(shallowCopy === originalObj) //false
console.log(shallowCopy.address === originalObj.address) //true

//why ??
/*
user
 ↓
┌─────────────────┐
│ name            │
│ address ────────┼──────┐
└─────────────────┘      ↓
                    ┌──────────────┐
                    │ city         │
                    │ Kathmandu    │
                    └──────────────┘
                         ↑
┌─────────────────┐      │
│ name            │      │
│ address ────────┼──────┘
└─────────────────┘
 ↑
copy
shallow copy only copy the outer layer but nested obj is not copied {instead the obj reference is copied}

*/

//Real world example like react
/*
const user = {
  name: "Alish",
  address: {
    city: "Kathmandu"
  }
};

//here we want to update the nested obj
const user = {
  name: "Alish",
  address: {
    city: "Kathmandu"
  }
};
here we're creating new objects at each level
This is basically manual immutable updating and is closely related to shallow-copy concepts.

You don't always need a full deep clone in React. Usually, you copy only the levels you're changing.

Shallow clone

Shallow clone le outer object matra new banaucha.

Deep clone

Deep clone le outer object ra nested objects sabai ko separate copy banaucha.

"A shallow clone creates a new outer object but shares references to nested objects, while a deep clone creates independent copies of nested objects as well."
*/