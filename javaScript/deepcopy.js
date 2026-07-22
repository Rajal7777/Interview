const orignalUser = {
  name: "Alex",
  metadata: { role: "admin" },
};

const copyUser = { ...orignalUser };  
//console.log("original", orignalUser);  //original { name: 'Alex', metadata: { role: 'admin' } }
//console.log("copy", copyUser);  //copy { name: 'Alex', metadata: { role: 'admin' } }


//copyUser.name = 'Rajal';

//console.log(copyUser);  //{ name: 'Rajal', metadata: { role: 'admin' } }
//console.log('original',orignalUser) //original { name: 'Alex', metadata: { role: 'admin' } }


//change the deep nested obj
//will cahnge the original oobject as well so it is dangerous.

//copyUser.metadata.role = 'user';

//console.log('original', orignalUser)   //original { name: 'Alex', metadata: { role: 'user' } }


//it is safe to use will not affect the original obj
const deepCopy = structuredClone(orignalUser);

//console.log(deepCopy);   //{ name: 'Alex', metadata: { role: 'admin' } }
deepCopy.metadata.role ='user';
console.log(orignalUser)  //{ name: 'Alex', metadata: { role: 'admin' } }


const newCopy = JSON.parse(JSON.stringify(orignalUser));
newCopy.metadata.role = 'public'
console.log('NewCopy', newCopy);
console.log(orignalUser) 



