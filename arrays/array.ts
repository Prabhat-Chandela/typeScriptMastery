// in the example below we will see how can we declare an array.

// const myarr : [] = []; it's an array of type never which is not ideal.

// now we will declare an array of type string.
const strArr: string[] = [];
        // we can also declare it like
        // const strArr: Array<string> =[]        

strArr.push("prabhat");

// now we will declare an array of type number..
const numArr: number[] = [];
        // we can also declare it like
        // const numArr: Array<number> =[]        
numArr.push(10);


// in the example below we will decalre an array containing object of type user.

type User = {
    name:string
    email:string
    isAuthenticated:boolean
}

const allUsers: User[] = [];
allUsers.push({name:"prabhat" , email:"prabhat@mail.com" , isAuthenticated:true});


//in the example below we declare an array containing array of numbers.

const MLModels: number[][] = [
    [255,255,0]
]
