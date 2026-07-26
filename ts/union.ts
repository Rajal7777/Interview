//Union types 
/*
Union types allow avariable or parameter to accept more than one valid type.
they're useful when a function or API can legitimately receive different types of values.
to safely use the value, we perform type narrowing with checks like typeof, instanceof, of custom type guards
ユニオン型がたは、変数へんすうまたはパラメータが複数ふくすうの有効ゆうこうな型かたを受うけ入いれることを可能かのうにします。 関数かんすうやAPIが正当せいとうに異ことなる型かたの値ねを受うけ取とれる場合ばあいに役立やくだちます。 値ねを安全あんぜんに使用しようするために、typeof や instanceof などのチェック、またはカスタムの型かたガードによって型かたの絞しぼり込こみを行おこないます。
*/

//create a function using union types

function printId(id: string | number): void{
 if(typeof id === 'string'){
    console.log(id.charAt(0).toUpperCase() + id.slice(1));
 }else {
    console.log(id)
 }
}

printId(101); // Output: 101
printId("hello"); // Output: Hello

//Explanation of why we use union types
/*
i used union types because the function should accept either a string or a number as an argument.
since i need to use the method available to strings and numbers safely. according to the value provided, i used typeof to narrow the type before calling type-specific methods.
This keeps the function flexible while maintaining type safety.

引数ひきすうとして文字もじ列れつまたは数値すうちのいずれかを受うけ取とる必要ひつようがあるため、ユニオン型がたを使用しようしました。文字もじ列れつと数値すうちで利用りよう可能かのうなメソッドを安全あんぜんに使用しようする必要ひつようがあるためです。指定していされた値ねに応おうじて、型かた固有こゆうのメソッドを呼よび出だす前まえに typeof で型かたを絞しぼり込こみました。これにより、型かた安全あんぜん性せいを維持いじしつつ関数かんすうを柔軟じゅうなんに保たもてます。
*/


// Define a union type for different payment methods
type CreditCard = { provider: 'visa' | 'mastercard'; cardNumber: string };
type PayPal = { email: string };
type Crypto = { walletAddress: string };

type PaymentMethod = CreditCard | PayPal | Crypto;

// Function using the union type
function processPayment(method: PaymentMethod, amount: number): string {
    //email in method means does this object contain email property
    switch (method.provider || ('email' in method ? 'paypal' : 'crypto')) { 
        case 'visa':
        case 'mastercard':
            return `Processing credit card payment of $${amount}.`;
        case 'paypal':
            return `Routing $${amount} to PayPal account: ${method.email}.`;
        case 'crypto':
            return `Verifying $${amount} crypto transfer to ${method.walletAddress}.`;
        default:
            throw new Error("Unknown payment method");
    }
}


//ALTERNATE 
type CreditCard = {
  type: "creditCard";
  provider: "visa" | "mastercard";
  cardNumber: string;
};

type PayPal = {
  type: "paypal";
  email: string;
};

type Crypto = {
  type: "crypto";
  walletAddress: string;
};

type PaymentMethod = CreditCard | PayPal | Crypto;

function processPayment(method: PaymentMethod, amount: number) {
  switch (method.type) {
    case "creditCard":
      return `Processing ${method.provider} payment of $${amount}.`;

    case "paypal":
      return `Routing $${amount} to ${method.email}.`;

    case "crypto":
      return `Sending $${amount} to ${method.walletAddress}.`;
  }
}