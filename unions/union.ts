// union allows you to assign multiple types to a variable , object , functions , arrays in typescript.

let myVar: string | number = 30;
myVar = "30";


// in the example below we will create two types 'User' and 'Admin' and then assigning them to a variable or object.

type User ={
    name:string
    email:string
    id:number
}

type Admin ={
    userName: string
    email: string
    id:number
}


let prabhat: User | Admin = {name:"prabhat" , email:"prabhat@mail.com" , id:10 };
// prabhat={name:"prabhat" , email:"prabhat@mail.com" , id:10 , userName:"pc"}
prabhat= {userName:"pc" , id:10 , email:"prabhat@mail.com"};


// in the below example we see the union usecase with a function.

function getId(id: string | number ) {
    if(typeof id === "string"){
        id.toLocaleLowerCase()
    }
    //  if(typeof id === "number"){
    //     id + 2
    // }
}


// in the example below we see the use case of unions with array.

            // it's a mixed array containing strings and number.
            const mixedArr : (string | number) [] = ["prabhat" , "hello" , 10] ;

            // it's a case where an array is either of type string or number.
            const myArr : string[] | number[] = ["1" ,"2" , "3"];



// in the below example we see a useful case of union , where we provide user only three options for allotment of seats and the user can select only the options available.

let seatAllotment : "aisle" | "middle" | "window" ;

seatAllotment = "aisle"; 
