const users = [
  { id: 1, name: "Anish" },
  { id: 2, name: "Sita" },
  { id: 1, name: "Anish" }, // Duplicate ID
  { id: 3, name: "Hari" }
];


//Set is a built-in JavaScript data structure that stores only unique values. I created a Set called seen to keep track of the worker IDs that I've already processed. This allows me to quickly check whether an ID has been seen before.

// new set object to keep track of seen IDs
//set ly eutai value double rakhna dindae na
const seen = new Set();  //khali set object banako

const uniqueUsers = users.filter(user=> {
  //users ma filter garay ra sabai data haru ma user.id check garny
  //seen object vitra same user.id xa vany skip garnay
  if(seen.has(user.id)){
   return false;  //skip if id already exists
  }

  seen.add(user.id);
  return true;

})
console.log(seen)  /*
[
  { id: 1, name: 'Anish' },
  { id: 2, name: 'Sita' },
  { id: 3, name: 'Hari' }
]
*/

console.log(uniqueUsers)  //const seen = new Set();


/*  -------------------------------------------------------  */

const users1 = [
  { id: 1, name: "Anish" },
  { id: 2, name: "Sita" },
  { id: 1, name: "Anish" }, // Duplicate ID
  { id: 3, name: "Hari" },
];

//user = current user object, index = current index of the user in the array, data = original array
//findIndex() ->returns the index of the first elemnt that satisfies the condition
const uniqueUsers1 = (users) => {
  const filtered = users.filter((user, index, data) => {
    //yemsa hami filter garay ra sabai data haru ma user.id check garny
    //findIndex((u) => u.id === user.id) 1st loop ma check hunxa 1 = 1 id same xa so tyo 1st element ko index return garca so zero return garxa

    //3rd loop ma u.id(1) = user.id(1) yesma retun ma 0 garxa 
    //jun cahi index(2) !== 0 condition false hunca ra filter bata skip hunca
    return index === data.findIndex((u) => u.id === user.id);
  });
  return filtered;
};

console.log(uniqueUsers1(users1));

/*  -------------------------------------------------------  */


//reduce ra find method use garay ra duplicate obj remove garxau

//find() method cahi kunai pani array bata deya ko condition satisfy huny 1st element ko value return garca
/*
w.id === worker.id: Yo chai condition ho. Yo loop chaldah acc bhitra paila nai basiseko worker ko id (w.id), aile bahira bata bhitra chhiranai lageko naya worker ko id (worker.id) sanga match garchha ki nai bhandi check gareko ho.

if not found then return undefined, if found then return the object

*/

const workers = [
  { id: 1, name: "Anish" },
  { id: 2, name: "Sita" },
  { id: 1, name: "Anish" }, // Duplicate ID
  { id: 3, name: "Hari" },
];

function findUniqueWorkers(workers) {
return workers.reduce((acc, worker) => {
 const duplicate = acc.find(w => w.id === worker.id);

 if (!duplicate) {
  acc.push(worker);
 }
console.log('acc, worker', acc, worker);
 return acc;
}, []);

}


console.log(findUniqueWorkers(workers));



/*  -------------------------------------------------------  */
  

//alternaate

/*
const uniqueWorker = {};

function findUniqueWorkers(workers) {
  workers.map((worker) => {
    if(uniqueWorker[worker.id]) {
      return;
    }
    uniqueWorker[worker.id] = worker;
  });

  return Object.values(uniqueWorker);
}


console.log(findUniqueWorkers(workers));

*/
const workers = [
  { id: 1, name: "Anish" },
  { id: 2, name: "Sita" },
  { id: 1, name: "Anish" }, // Duplicate ID
  { id: 3, name: "Hari" },
];

const uniqueWokers = {};

const findUniqueWorkers = workers.filter((worker) => {
  //check garacu ki uniqueWokers object ma worker.id cha ki nai
  //3rd loop ma id 1 xa true hunca so return false hunca ra filter bata skip hunca
  if(uniqueWokers[worker.id]){
      return false;
    }
    uniqueWokers[worker.id] = true;  //{1:true, 2:true, 3:true}
    return true;
  });


console.log(findUniqueWorkers);