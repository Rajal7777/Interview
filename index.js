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