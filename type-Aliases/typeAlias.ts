// type aliases is just a covenient way of assigning types to the variables or elements of an object , once you define the type you can use them in the program anywhere without describing there type again .

type User = {
name: string;
email: string;
isAuthenticated: boolean;
}

// in the example below there is a function which have user of the above type 'User' as a parameter and also returns an object of type 'User'.

function makeUser(user: User): User {
    return {name:"" , email: "" , isAuthenticated:true}
}

makeUser({name:"" , email:"" , isAuthenticated:false});


// another example where we define a type point containing two variables of type number and later is being used in a function createCordinate().

type Point ={
    x:number ;
    y:number;
}

function markCordinate(point : Point) {
    console.log("The coordinate's x value is " + point.x);
    console.log("The coordinate's y value is " + point.y);
}

markCordinate({x:10 , y:10});


// 'readonly' is a key word which stops you to modify the value of a variable assigned with it , '?' is used with a variable which is optional.There is usecase of them in the example below.

type Customer = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCard ? : number
}

// in the example below we are creating mycustomer of type 'Customer' but we didnot provide the creditCard value as it is an optional variable.

let myCustomer: Customer = {
    _id:"123456",
    name:"prabhat",
    email:"prabhat@mail.com",
    isActive: true
}

// here we cannot do that as _id is readonly 
// myCustomer._id = "5625367238"



// in the example we will se the use case of '&' which is used to combine multiple types and create a  type contains multiple types.

type cardNumber = {
    cardnumber:string
}

type cardDate={
    expDate: string
}

// in the below example we create a type 'cardDetails' which is a combination of types cardNumber , cardDate and a new type containing cvv

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

