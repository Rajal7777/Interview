//async function returns a promise it takes id as number and returns a name as string
/*
An async function always returns a Promise, so I type the resolved value inside Promise<>. For example, if a function returns a User object, I write Promise<User>. If it returns multiple users, I use Promise<User[]>

非同期関数（ひどうきかんすう）: Async function.
async関数は常にPromiseを返すので、戻り値の型はPromise<>を使って定義します。例えば、戻り値がUserオブジェクトであればPromise<User>、配列であればPromise<User[]>のように記述します。
*/

async function getUserName(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve("John Doe");
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

//.then() is a Promise method that says:

//"When this Promise successfully finishes, run this function with the result."

getUserName(1).then((name) => {
  console.log(name); // Output: John Doe
});

//console.log(getUserName(2)); // Error user not found

//object type for user

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUser(id: number): Promise<User> {
  const user = {
    id: 1,
    name: "Rajal",
    email: "mail",
  };
  return Promise.resolve(user);
}

//use case
getUser(1).then((user) => {
  console.log(user.name); // Output: Rajal
});

//next js pattern for async function
type ActionResponse = {
  success: boolean;
  message: string;
};

async function deleteUser(id: number): Promise<ActionResponse> {
  try {
    //delete product from db
    await prisma.product.delete({ where: { id } });

    return {
      success: true,
      message: "Product deleted successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete product",
    };
  }
}
