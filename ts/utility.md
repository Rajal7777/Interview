What are utility Types ?
utility types are used to modify the existing types

For example suppose we have:

interface User {
    name: string;
    age: number;
}

Instead of creating another type manually:
1)Partial<T>  this makes every property optional.
type UpdateUser = Partial<User>;
becomes: 
type UpdateUser {
    name?: string;
    age?: number;
}
now we can do
const user: UpdateUser = {
  name: "John"
}; no need to provide the age.


2)Required<T> makes every property required.
Real World use for updating form
type User = {
  name?: string;
  age?: number;
};
type FullUser = Required<User>;
becomes:
type FullUser {
    name: string;
    age: number
}

3. Readonly<T>  Prevents modification.
Makes all property imutable readonly.throws an error if you try to assign a value;
type User = {
  name: string;
};
const user: Readonly<user>= {
    name: 'Baki'
};

now user.name = 'Yujiro'  //throws error can not assign value to name readonly.

4. Pick<T, Keys> Select only specific properties.
Real-world use
Displaying limited user information.

type User = {
  id: number;
  name: string;
  email: string;
};
type UserPreview = Pick<User, 'name' | 'email>;

becomes: result selsct the name: string and email: string from User
type UserPreview = {
  name: string;
  email: string;
};

5. Omit<T, Keys> Removes properties.
Real-world use
Never expose passwords.

type User = {
  id: number;
  name: string;
  password: string;
};

type PublicUser = Omit<User, 'password'>;

becomes
type PublicUSer = {
    id: number,
    name: string,
}

6. Record<K, T> -> creates an object type
type userRole = Record<string, number>

equvalent to 
type UserRole = {
    [key: string]: number;
}

example:
const scores: Record<string, number> = {
    Raj: 95,
    Jhon: 88
}

7. Exclude<T, U> -> removes types from a union.
type Status = | "loading" | "success" | "error"

type NewStatus = Exclude<
Status,
"loading">

becomes:
type NewStatus = 
| "success"
|"error";

10. ReturnType<T> Gets a fuctions return type

function getUser(){
    return {
        name: 'Raj',
        age: 29,
    }
}

type User = ReturnType<typeof getUser>
Result:
type User = {
    name: string;
    age: number;
}

type ProductRecord = Awaited<ReturnType<typeof prisma.product.findMany>>[number]

Awaited -> Promise ()
ReturnTyple gets the return type of findMany.
[number] gets the type of one array element.