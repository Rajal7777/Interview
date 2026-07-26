//it helps to prevent modification of properties after they are initialized
/*
the readonly modifier allows the value to be set only during initialization and prevents any modification of the value after that. It is used to create immutable objects and ensure that their properties cannot be changed accidentally or intentionally.

そのプロパティが意図いとせずに、または意図いと的てきに変更へんこうされないようにするために使用しようされます。
*/

type User = {
    name: string;
    age: number;
 }

 const user: Readonly<User> = {
    name: "John",
    age: 30
 }

 console.log(user.name)  //Jhon
 user.name = "Doe" //Error: Cannot assign to 'name' because it is a read-only property.

 interface Product {
      readonly id: number; 
      name: string;
 }
 
 const product: Product = {
    id: 1,
    name: "Laptop"
 }

 product.name = "Desktop" //Allowed
 product.id = 2 //Error: Cannot assign to 'id' because it is a read-only property.