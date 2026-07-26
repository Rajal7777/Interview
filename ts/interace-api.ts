//Interface Explanation
//Used to define the api response , Props structure

/*
An interface defines the expected structure of data, especially from api responses,it acts as a contract between frontend and backend.

By using interfaces, Typescript provides type safety, compile-time error checking, and better IDE support such as auto complete.

This makes the code easier to maintain and reduce runtime errors.

*/


//API Response
interface Product {
    id: number;
    name: string;
    price: number;
}

//React Props 
interface ButtonProps {
    title: string;
    disabled: boolean;
}

function Button(props: ButtonProps){
    return <button>{props.title}</button>
}

//Form data 
interface LoginForm {
    email: string;
    password: string;
}