// in the example below we will see how can we declare an array.
// const myarr : [] = []; it's an array of type never which is not ideal.
// now we will declare an array of type string.
var strArr = [];
// we can also declare it like
// const strArr: Array<string> =[]        
strArr.push("prabhat");
// now we will declare an array of type number..
var numArr = [];
// we can also declare it like
// const numArr: Array<number> =[]        
numArr.push(10);
var allUsers = [];
allUsers.push({ name: "prabhat", email: "prabhat@mail.com", isAuthenticated: true });
//in the example below we declare an array containing array of numbers.
var MLModels = [
    [255, 255, 0]
];
