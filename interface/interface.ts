// "interface" is somewhat similar to the "type".

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,

    // we can also assign functions in the interface , like we have done below assigning a function startTrail which will return a string value, there are two ways or two syntax of declaring functions in an interface .

    // startTrail: ()=> string
    startTrail():string, 
    getCoupon(couponName:string , value: number): number   
}

// reopening of interface , we can add more values and properties to an existing interface , like in the example below we are reopening the interface 'User' which we have already declared above.

interface User {
    githubToken: string
}


const prabhat: User = {
    dbId:123,
    email: "prabhat@mail.com",
    userId: 2222,
    startTrail: ()=>{
        return "hello"
    },
    getCoupon:(name:"pc10" , value:10)=>{
        return 10
    },
    githubToken: "pcGithubToken"
}

// inheritance in interface , we can inherit an interface into another interface using 'extends' keyword like we are doing in the example below , where we are inheriting the interface 'User' into a new interface 'Admin'.

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const pcAdmin: Admin = {
    dbId:123,
    email: "prabhat@mail.com",
    userId: 2222,
    role: "admin",
    startTrail: ()=>{
        return "hello"
    },
    getCoupon:(name:"pc10" , value:10)=>{
        return 10
    },
    githubToken: "pcGithubToken"
}