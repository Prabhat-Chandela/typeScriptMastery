// type narrowing cases in typeScript.Narrowing is just precautionary steps we take to better our business logic to minimize the risk of error or minimize the risk of code breaking.


// In the example below we are using 'typeof(type gaurd)' to check the type of the value as precautionary step.
function detectType(val: number | string){
    if(typeof val === 'string'){
        return val.toUpperCase()
    }
    return val+3;
}

//In the example we checking for the null case as a precautionary measure. 
function getId(id: string | null){
    if(!id){
        console.log("id cannot be null")
        return
    }
    return id.toLowerCase();
}

// In the example below the code looks great and most of the cases are covered but we have not covered one case which is empty strings "" , as empty strings is a truthy value . The  code will not throw any error but the idealy we should be checking for empty string as well.
function printAll(strs: string | string[] | null){

    // check for null.
    if(strs){
        // check for array of strings.
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }
        // check for string.
         else if(typeof strs === "string"){
            console.log(strs);
        }
        // but we have not checked for an empty string.
    }
}


// The 'in' operator narrowing. In the example below we have two interface 'User' and 'Admin', We have created a function 'isAdminAccount' where we are checking whether the account is a User account or a Admin account.

interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    adminId: number
}

function isAdminAccount(account: User | Admin){
    if("adminId" in account){
        console.log("is Admin")
        return account.adminId
    }
    return false;
}


// 'instanceof' narrowing.It is useful for most values that can be constructed with 'new' keyword.In the example below we have created a function 'valueCheck', where we write our logic based on whether the value is a Date object or a string.

function valueCheck(val: Date | string){
    if(val instanceof Date){
        return val.toDateString();
    } else{
        return val.toLocaleLowerCase();
    }
}


// Using type predicates.In TypeScript, type predicates are used to refine types within a function. When you use a type predicate in a function, TypeScript understands that a specific type can be inferred if the predicate returns true.

// In the example below we have created two type 'Fish' and 'Bird' , we have also created a function 'isFish' which returns a boolean value but if we use type predicates then we can return the value of pet of type 'Fish' when the boolean value is true.

type Fish = {swim:()=>void};
type Bird = {fly:()=>void};


// the function below returns a boolean.
// function isFish(pet: Fish | Bird){
//     return(pet as Fish).swim!== undefined
// }

// But if we use type predicates in the 'isFish' method we can return pet as type fish when the value is true.
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        // Here, TypeScript knows 'pet' is of type 'Fish'
        pet
        return "Fish food"
    } else{
         // Here, TypeScript knows 'pet' is of type 'Bird'
        pet
        return "Bird food"
    }

}


// discriminated unions and Exhaustiveness checking.

interface Circle{
    shape:"circle",
    radius:number
}

interface Square{
    shape:"square",
    side:number
}

interface Rectangle{
    shape:"rectangle",
    length:number,
    width:number
}

type Shape = Circle | Square | Rectangle

function getShape(object:Shape){
    if(object.shape === "circle"){
        return "Circle"
    }
    return "Square"
}

function getArea(object:Shape){
    switch(object.shape){
        case "circle":
            return Math.PI * object.radius ** 2

        case "square":
            return object.side * object.side

        case "rectangle":
            return object.length * object.width

        default:
            const _defaultforshape: never = object
            return _defaultforshape
    }
}